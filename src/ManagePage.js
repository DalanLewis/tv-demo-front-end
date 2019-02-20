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
            nameInProgress: '',
            ratingInProgress: '',
            imageInProgress: '',
        },
        tvShows: []
    }


    nameInProgress = (e) => {
        this.setState({
            shows: {
                nameInProgress: e.target.value,
                ratingInProgress: this.state.shows.ratingInProgress,
                imageInProgress: this.state.shows.imageInProgress
            }
        }
        )
    }

    ratingInProgress = (e) => {
        this.setState({
            shows: {
                nameInProgress: this.state.shows.nameInProgress,
                ratingInProgress: e.target.value,
                imageInProgress: this.state.shows.imageInProgress
            }
        }
        )
    }

    imageInProgress = (e) => {
        this.setState({
            shows: {
                nameInProgress: this.state.shows.nameInProgress,
                ratingInProgress: this.state.shows.ratingInProgress,
                imageInProgress: e.target.value
            }
        }
        )
    }

    componentDidMount = async (a) => {
        try {
            const res = await fetch('http://localhost:4000/shows')
            const tvShows = await res.json()
            this.setState({ tvShows }
            )
        }
        catch (err) {
            console.log(err)
        }
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

    tvShowSelected = () => {
        // return (
        //     this.setState({
        //         nameInProgress: this.props.tvShows.name,
        //         ratingInProgress: this.props.tvShows.rating,
        //         imageInProgress: this.props.tvShows.image
        //     })
        // )
    }

    // tvShowDeleted = () => {
    //     // return (
    //     //     this.props.tvShowDeleted()
    //     )
    // }


    saveTvShow = async (e) => {
        e.preventDefault()
        try {
            await fetch('http://localhost:4000/shows', {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(this.state.shows)
            })
            console.log(this.state.shows)
            this.componentDidMount()
        }
        catch (err) {
            console.log(err)
        }
    }


    // this.setState({
    //     shows: {
    //         nameInProgress: '',
    //         ratingInProgress: 0,
    //         imageInProgress: '',
    //     }
    // })




    // saveTvShow = (e) => {
    //     e.preventDefault()
    // this.props.saveTvShow(
    //     {
    //         name: this.state.nameInProgress,
    //         rating: this.state.ratingInProgress,
    //         image: this.state.imageInProgress
    //     })




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