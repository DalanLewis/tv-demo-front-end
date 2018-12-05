import React, { Component, Fragment } from 'react'
import { SiteNav } from './SiteNav'
import TVshow from './TVshow'


class ManagePage extends Component {

    tvShowSelected = () => {
        return (
            console.log("Tv Show Selected")
        )
    }

    tvShowDeleted = () => {
        return (
            console.log("Tv Show Deleted")
        )
    }
    
    saveTvShow = (e) => {
        e.preventDefault()
        return (
            console.log("saveTvShow")
        )
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
                            <TVshow allowDelete={true} deleteHandler={this.tvShowDeleted} selectHandler={this.tvShowSelected} />
                            {/* <ul>
                                <li>
                                    Game of Thrones allowDelete={true}/>
                                </li>
                                <li>
                                    Breaking Bad <button onclick="Remove()">-</button>
                                </li>
                                <li>
                                    Stranger Things <button onclick="Remove()">-</button>
                                </li>
                                <li>
                                    Rick and Morty <button onclick="Remove()">-</button>
                                </li>
                                <li>
                                    Southpark <button onclick="Remove()">-</button>
                                </li>
                                <li>
                                    Friends <button onclick="Remove()">-</button>
                                </li>
                                <li>
                                    That 70's Show <button onclick="Remove()">-</button>
                                </li>
                            </ul> */}
                        </nav>
                    </aside>
                    <form>
                        <h3>New/Edit show</h3>
                        <a> Name: <input size="20" type="text" /></a>
                        <a>Rating: <input size="20" type="text" /></a>
                        <a>Img url: <input size="20" type="text" /></a>
                        <a><button onClick={this.saveTvShow}></button></a>
                    </form>
                </article>
            </Fragment>
        )
    }
}
export default ManagePage