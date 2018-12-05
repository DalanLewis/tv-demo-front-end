import React, { Component, Fragment } from 'react'
import {SiteNav1} from './SiteNav'


class PreviewPage extends Component {
    render = () => {
        return (
            <Fragment>
                <section>
                    <h1>Notflix.com</h1>
                    <header>
                        <SiteNav1/>
                    </header>
                </section>
            <aside>
                <nav>
                    <ul>
                        <h2>Shows</h2>
                        <li>
                            Game of Thrones
                    </li>
                        <li>
                            Breaking Bad
                    </li>
                        <li>
                            Stranger Things
                    </li>
                        <li>
                            Rick and Morty
                    </li>
                        <li>
                            Southpark
                    </li>
                        <li>
                            Friends
                    </li>
                        <li>
                            That 70's Show
                    </li>
                    </ul>
                </nav>
            </aside>
                <article>
                    <div>
                        <span>
                            <b><u>Game of Thrones</u> <u>Rating: 9.5/10</u></b>
                        </span>
            <picture>
                <img src="./GOT.jpg"/>
            </picture>
                    </div>
                </article>
            </Fragment>
        )
    }
}

export default PreviewPage