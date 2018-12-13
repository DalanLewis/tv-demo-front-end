import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVshow extends Component {


    static propTypes = {
        name: PropTypes.string.isRequired,
        deleteHandler: PropTypes.func,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
    }

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