import React, { Component, Fragment } from 'react'
import { SiteNav1 } from './SiteNav'
import TVshow from './TVshow'
import PropTypes from 'prop-types'



class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired,
    }

    state = {
        selectedShow: {
            name: '',
            rating: '',
            image: ''
        }
    }

    tvShowSelected = (a) => {
        console.log(a)
        this.setState({
            selectedShow: {
                name: this.props.show.name,
                rating: this.props.show.rating,
                image: this.props.show.image
            }
        })
    }

    renderShows = () => {
        if (this.props.show.name)
        return (
            <TVshow name={this.props.show.name} selectHandler={this.tvShowSelected} />
        )
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
                       <ul> {this.renderShows()} </ul>
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