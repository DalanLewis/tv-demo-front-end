import React, { Component } from 'react'

class test extends Component {

    saveShow = () => {
        console.log('saveTVShow')
    }
render = () => {
    return (
        <div>
            <button type="button" onClick={this.saveShow}>Test</button>
        </div>
    )
}
}
export default test