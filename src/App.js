import React, { Component } from 'react'
import './Notstyled.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import Test from './test'



class App extends Component {

  state = {
    show: {
        name: '',
        rating: '',
        image: '',
    }
}

tvShowDeleted = () => {
  return (
      this.setState({
          show:{
              name: '',
              rating: '',
              image: ''
          }
      })
  )
}

saveTvShow = (a) => {

  this.setState({
      show: {
          name: a.name,
          rating: a.rating,
          image: a.image
      },
      nameInProgress: '',
      ratingInProgress: '',
      imageInProgress: '',
  })
}

renderManagePage = () => {
    return (
        <ManagePage show={this.state.show} saveTvShow={this.saveTvShow} tvShowDeleted={this.tvShowDeleted}/>
    )
}

renderPreviewPage = () => {
    return (
        <PreviewPage show={this.state.show} />
    )
}

  render = () => {
    console.log(this.state)

    return (
        <Router>
          <Switch>
            <Route path="/manage" component={this.renderManagePage}/>
            <Route path="/preview" component={this.renderPreviewPage}/>
            <Route path='/test' component={Test}/>
          </Switch>
        </Router>
    )
  }
}
export default App;