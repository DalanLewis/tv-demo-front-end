import React, { Component } from 'react';

class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <section>
                    <h1>Notflix.com</h1>
                    <header>
                        <div className="image">
                            <img src="not_images/manage.jpg"/>
                        </div>
                        <div class="image">
                            <img src="not_images/previewul.jpg"/>
                        </div>
                    </header>
                </section>
            <section>
                <article>
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
                </article>
                <article>
                    <div>
                        <span>
                            <b><u>Game of Thrones</u> <u>Rating: 9.5/10</u></b>
                        </span>
                    </div>
                    <picture>
                        <img src="not_images/GOT.jpg" style="float:right;width:-500px;height:500px;" />
                    </picture>
                </article>
            </section>
            </div>
        )
    }
}

export default PreviewPage