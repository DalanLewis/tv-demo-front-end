import React, { Component } from 'react';</div>

class ManagePage extends Component; {
    render = () => {
        return (
            <div>
            <section>
            <h1>Notflix.com</h1>
            <header>
                    <!--Subtabs at the top of page-->
            <div class="image">
                <a href=file:///Users/dalanlewis/projects/tv-demo-front-end/Notflix.html><img src="not_images/manage.jpg"></a>
            </div>
            <div class="image">
                    <img src="not_images/previewul.jpg">
            </div>     
            </header>
        </div>
    </section>
    <section>
        <article>
            <!--Left oriented List of shows-->
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
            </aside>
            </nav>
        </article>
        <article>
            <div>
            <span>
                <b><u>Game of Thrones</u> <u>Rating: 9.5/10</u></b>
            </span>
            </div>
            <picture>
                <img src="not_images/GOT.jpg" style="float:right;width:-500px;height:500px;"/>
            </picture>
        </article>
    </section>
            </div>
        )
        }
    }

export default PreviewPage