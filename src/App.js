import React, { Component } from 'react'
import './Notstyled.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import Test from './test'



class App extends Component {

    state = {
        tvShows: [],
        show: {
            name: '',
            rating: '',
            image: '',
        }
    }

    tvShowDeleted = () => {
        return (
            this.setState({
                show: {
                    name: '',
                    rating: '',
                    image: ''
                }
            })
        )
    }

    saveTvShow = (a) => {
        console.log(a)
        this.setState((prevState) => {
            return {
                tvShows: [...prevState.tvShows, {
                    name: a.name,
                    rating: a.rating,
                    image: a.image
                }]
            }
        }
        )
    }

    renderManagePage = () => {
        return (
            <ManagePage tvShows={this.state.tvShows} show={this.state.show} saveTvShow={this.saveTvShow} tvShowDeleted={this.tvShowDeleted} />
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
                    <Route path="/manage" component={this.renderManagePage} />
                    <Route path="/preview" component={this.renderPreviewPage} />
                    <Route path='/test' component={Test} />
                </Switch>
            </Router>
        )
    }
}
export default App;