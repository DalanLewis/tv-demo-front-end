import React, { Component, Fragment } from 'react'
import { SiteNav } from './SiteNav'
import TVshow from './TVshow'
// import { PropTypes } from 'prop-types'


class ManagePage extends Component {

    // static propTypes = {
    //     show: PropTypes.object.isRequired,
    //     tvShowDeleted: PropTypes.func.isRequired,
    // //     saveTvShow: PropTypes.func.isRequired,
    // //     tvShows: PropTypes.array.isRequired

    // }

    state = {
        shows: {
        nameInProgress: 'Shitty Show',
        ratingInProgress: 3,
        imageInProgress: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
    },
        tvShows: []
    }


    nameInProgress = (e) => {
        this.setState({ shows:{nameInProgress: e.target.value} })
    }

    ratingInProgress = (e) => {
        this.setState({ shows:{ratingInProgress: e.target.value} })
    }

    imageInProgress = (e) => {
        this.setState({ shows:{imageInProgress: e.target.value} })

    }

    componentDidMount = (a) => {
        fetch('http://localhost:4000/shows', {
            method: 'get',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(a)
            })
            .then(response => response.json())
            .then((show)=> {
                console.log(show)
                this.setState({tvShows: show})
            })
            .catch()
    }


    renderShows = () => {
        if (this.state.tvShows) {
            return this.state.tvShows.map(
                (tvShow) => (
                    <TVshow key={tvShow.nameInProgress} allowDelete={true} deleteHandler={this.tvShowDeleted} selectHandler={this.tvShowSelected} name={tvShow.nameInProgress} />
                )
            )
        }
    }

    // tvShowSelected = () => {
    //     return (
    //         this.setState({
    //             nameInProgress: this.props.tvShows.name,
    //             ratingInProgress: this.props.tvShows.rating,
    //             imageInProgress: this.props.tvShows.image
    //         })
    //     )
    // }

    // tvShowDeleted = () => {
    //     // return (
    //     //     this.props.tvShowDeleted()
    //     )
    // }


    saveTvShow = (e) => { 
        e.preventDefault ()
        fetch('http://localhost:4000/shows', {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.state.shows)
        })
        .then(response => response.json())
        .then((response)=>{
            this.componentDidMount()
            return response
        })
        .catch()



    // saveTvShow = (e) => {
    //     e.preventDefault()
        // this.props.saveTvShow(
        //     {
        //         name: this.state.nameInProgress,
        //         rating: this.state.ratingInProgress,
        //         image: this.state.imageInProgress
        //     })

        this.setState({
            nameInProgress: '',
            ratingInProgress: 0,
            imageInProgress: '',
        })
    }

    render = () => {
        return (
            <Fragment>
                <section>
                    <h1>Notflix.com</h1>
                    <header>
                        <SiteNav />
                    </header>
                </section>
                <article>
                    <aside>
                        <nav>
                            <h2>Shows</h2>
                            <ul> {this.renderShows()} </ul>
                        </nav>
                    </aside>
                    <form>
                        <h3>New/Edit show</h3>
                        <span className='form'> Name: <input onChange={this.nameInProgress} size="20" type="text" value={this.state.shows.nameInProgress} /></span >
                        <span className='form'>Rating: <input onChange={this.ratingInProgress} size="20" type="text" value={this.state.shows.ratingInProgress} /></span >
                        <span className='form'>Img url: <input onChange={this.imageInProgress} size="20" type="text" value={this.state.shows.imageInProgress} /></span >
                        <span className='form'><button type="button" onClick={this.saveTvShow}>Save</button></span >
                    </form>
                </article>
            </Fragment>
        )
    }
}
export default ManagePage