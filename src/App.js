import React, { Component } from 'react'
import './Notstyled.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'



class App extends Component {
  render = () => {
    return (
        <Router>
          <Switch>
            <Route path="/manage" component={ManagePage}/>
            <Route path="/preview" component={PreviewPage}/>
          </Switch>
        </Router>
    )
  }
}
export default App;