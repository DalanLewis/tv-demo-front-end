import React, { Component, Fragment } from 'react'
import { SiteNav } from './SiteNav'
import TVshow from './TVshow'


class ManagePage extends Component {

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageInProgress: '',
        show: {
            name: '',
            rating: '',
            image: '',
        }
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
        return (
            <ul>
                <li onClick={this.tvShowSelected}> Name: {this.state.show.name} </li>
                <li onClick={this.tvShowSelected}> Rating: {this.state.show.rating} </li>
                <li onClick={this.tvShowSelected}> Image: {this.state.show.image} </li>
                <button onClick={this.tvShowDeleted}>Delete</button>
            </ul>
        )


    }

    tvShowSelected = () => {
        return (
            this.setState ({nameInProgress: this.state.show.name,
                            ratingInProgress: this.state.show.rating,
                            imageInProgress: this.state.show.image})
        )
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

    saveTvShow = (e) => {
        e.preventDefault()

        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageInProgress: '',
            show: {
                name: this.state.nameInProgress,
                rating: this.state.ratingInProgress,
                image: this.state.imageInProgress
            }
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
                            {this.renderShows()}
                            {/* <TVshow allowDelete={true} deleteHandler={this.tvShowDeleted} selectHandler={this.tvShowSelected} /> */}
                            <ul>


                            </ul>
                        </nav>
                    </aside>
                    <form>
                        <h3>New/Edit show</h3>
                        <a> Name: <input onChange={this.nameInProgress} size="20" type="text" value={this.state.nameInProgress} /></a>
                        <a>Rating: <input onChange={this.ratingInProgress} size="20" type="text" value={this.state.ratingInProgress} /></a>
                        <a>Img url: <input onChange={this.imageInProgress} size="20" type="text" value={this.state.imageInProgress} /></a>
                        <a><button onClick={this.saveTvShow}></button></a>
                    </form>
                </article>
            </Fragment>
        )
    }
}
export default ManagePage