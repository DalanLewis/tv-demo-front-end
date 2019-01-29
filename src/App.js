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
            }
            )
        )
    }

    // saveTvShow = (a) => { 
    //     fetch('http://localhost:4000/shows', {
    //     method: 'post',
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     },
    //     body: JSON.stringify(a)
    //     })
    //     .then(response => response.json())
    //     .then((response)=>{
    //         console.log(response)
    //         return response
    //     })
    //     .catch()


        // this.setState((prevState) => { 
        //     return {
        //         tvShows: [...prevState.tvShows, {
        //             name: a.name,
        //             rating: Number(a.rating),
        //             image: a.image,
        //         }]
        //     }
        // }
    //     // )
    // }

    renderManagePage = () => {
        return (
            <ManagePage />
        )
    }

    renderPreviewPage = () => {
        return (
            <PreviewPage tvShows={this.state.tvShows} />
        )
    }

    render = () => {
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