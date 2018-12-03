import React, { Component } from 'react';

class ManagePage extends Component {
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
        </article>
            </div>
            )
    }
}
export default ManagePage