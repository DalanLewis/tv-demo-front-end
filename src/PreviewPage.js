import React, { Component, Fragment } from 'react'
import { SiteNav1 } from './SiteNav'
import TVshow from './TVshow'
import PropTypes from 'prop-types'



class PreviewPage extends Component {

    static propTypes = {
        // show: PropTypes.object.isRequired,
        tvShows: PropTypes.array.isRequired
    }

    state = {
        selectedShow: {
            name: '',
            rating: '',
            image: ''
        }
    }

    tvShowSelected = () => {
        this.setState({
            selectedShow: {
                name: this.props.tvShows.name,
                rating: this.props.tvShows.rating,
                image: this.props.tvShows.image
            }
        })
    }

    calculateAvgRating = () => {
        return this.props.tvShows.reduce((acc, cur) => {
            return acc + cur.rating / this.props.tvShows.length
        }, 0
        )
    }

    testing = () => {

    }

    renderShows = () => {
        if (this.props.tvShows) {
            return this.props.tvShows
                .filter((tvShow) => {
                    return tvShow.rating < 4
                })
                .map(
                    (tvShow) => (
                        <TVshow name={tvShow.name} key={tvShow.name} selectHandler={this.tvShowSelected} />
                    )
                )

        }
    }

    render = () => {
        return (
            <Fragment>
                <section>
                    <h1>Notflix.com</h1>
                    <header>
                        <SiteNav1 />
                    </header>
                </section>
                <article>
                    <aside>
                        <nav>
                            <h2>Shows</h2>
                            <ul> {this.renderShows()}
                                {this.calculateAvgRating()}
                            </ul>
                        </nav>
                    </aside>
                    <div>
                        <span>
                            <b><u>{this.state.selectedShow.name}</u> <u>{this.state.selectedShow.rating}</u></b>
                        </span>
                        <picture>
                            <img className='showpic' src={this.state.selectedShow.image} alt='preview of selected show' />
                        </picture>
                    </div>
                </article>
            </Fragment>
        )
    }
}

export default PreviewPage