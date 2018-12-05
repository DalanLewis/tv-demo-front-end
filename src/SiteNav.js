import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
    render = () => {
        return (
            <Fragment>
                <div className="image">
                    <img src="./manageul.jpg" alt="Manage" />
                </div>
                <div className="image">
                    <Link to="preview"><img src="./preview.jpg" alt="Preview" /></Link>
                </div>
            </Fragment>
        )
    }
}

export { SiteNav }



class SiteNav1 extends Component {
    render = () => {
        return (
            <Fragment>
                <div className="image">
                    <Link to="manage"><img src="./manage.jpg" alt="Manage" /></Link>
                </div>
                <div className="image">
                    <img src="./previewul.jpg" alt="Preview" />
                </div>
            </Fragment>
        )
    }
}

export { SiteNav1 }