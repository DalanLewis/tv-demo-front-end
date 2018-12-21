import React, { Component, Fragment } from 'react'
import { SiteNav } from './SiteNav'
import TVshow from './TVshow'
import { PropTypes } from 'prop-types'


class ManagePage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShowDeleted: PropTypes.func.isRequired,
        saveTvShow: PropTypes.func.isRequired,
        tvShows: PropTypes.array.isRequired

    }

    state = {
        nameInProgress: 'Game of Thrones',
        ratingInProgress: '10/10',
        imageInProgress: 'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
    }


    nameInProgress = (e) => {

        this.setState({ nameInProgress: e.target.value })
    }

    ratingInProgress = (e) => {
        this.setState({ ratingInProgress: e.target.value })
    }

    imageInProgress = (e) => {
        this.setState({ imageInProgress: e.target.value })

    }

    renderShows = () => {
        let theTvShows = []
        if (this.props.tvShows){
            for (let i = 0; i < this.props.tvShows.length; i++) {
                theTvShows = [...theTvShows, (<TVshow allowDelete={true} deleteHandler={this.tvShowDeleted} selectHandler={this.tvShowSelected} name={this.props.tvShows[i].name} />)]
            }
        }
        return theTvShows
    }

    tvShowSelected = () => {
        return (
            this.setState({
                nameInProgress: this.props.show.name,
                ratingInProgress: this.props.show.rating,
                imageInProgress: this.props.show.image
            })
        )
    }

    tvShowDeleted = () => {
        return (
            this.props.tvShowDeleted()
        )
    }

    saveTvShow = (e) => {
        e.preventDefault()
        this.props.saveTvShow(
            {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                image: this.state.imageInProgress
            })

        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
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
                        <span className='form'> Name: <input onChange={this.nameInProgress} size="20" type="text" value={this.state.nameInProgress} /></span >
                        <span className='form'>Rating: <input onChange={this.ratingInProgress} size="20" type="text" value={this.state.ratingInProgress} /></span >
                        <span className='form'>Img url: <input onChange={this.imageInProgress} size="20" type="text" value={this.state.imageInProgress} /></span >
                        <span className='form'><button type="button" onClick={this.saveTvShow}>Save</button></span >
                    </form>
                </article>
            </Fragment>
        )
    }
}
export default ManagePage