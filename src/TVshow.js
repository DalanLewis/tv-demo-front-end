import React, { Component } from 'react'

class TVshow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete) {
            return (
                <button onClick={this.props.deleteHandler}>Delete</button>
            )
        }
    }


    render = () => {
        return (
            <div>
                {this.renderDelete()}
                <button onClick={this.props.selectHandler}>Select{this.props.name}</button>
            </div>
        )
    }
}

export default TVshow