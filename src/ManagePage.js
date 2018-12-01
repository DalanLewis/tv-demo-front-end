import React, { Component } from 'react';

class ManagePage extends Component; {
    render = () => {
        return (
            <div>
                <section>
            <h1>Notflix.com</h1>
        <div>
            <header>
                    <!--Subtabs at the top of page-->
            <div class="image">
                <img src="not_images/manageul.jpg">
            </div>
            <div class="image">
                <a href="file:///Users/dalanlewis/projects/tv-demo-front-end/Notflixpreview.html"><img src="not_images/preview.jpg"></a>
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
            </aside>
            </nav>
        </article>
    </section>
    <section>
        <nav>
            <form>
                <h3>New/Edit show</h3>
                <a> Name: <input size= "20" type="text"></a><br>
                <a>Rating: <input size= "20" type="text"></a><br>
                <a>Img url: <input size= "20" type="text"></a><br>
                <a><button id="submit">Create/Update</button></a>
            </form>
        </nav>
    </section>
            </div>
        )
    }
    }
export default ManagePage