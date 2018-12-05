import React, { Component, Fragment } from 'react'
import {SiteNav} from './SiteNav'


class ManagePage extends Component {

//    const remove = function(){
//       console.log ('remove show')}

    render = () => {
        return (
            <Fragment>
                <section>
                    <h1>Notflix.com</h1>
                    <header>
                        <SiteNav/>
                    </header>
                </section>
                <article>
                    <aside>
                        <nav>
                            <ul>
                                <h2>Shows</h2>
                                <li>
                                    Game of Thrones <button onclick="Remove()">-</button>
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
                            </ul>
                        </nav>
                    </aside>
                    <form>
                        <h3>New/Edit show</h3>
                        <a> Name: <input size="20" type="text" /></a>
                        <a>Rating: <input size="20" type="text" /></a>
                        <a>Img url: <input size="20" type="text" /></a>
                        <a><button id="submit">Create/Update</button></a>
                    </form>
                </article>
            </Fragment>
        )
    }
}
export default ManagePage