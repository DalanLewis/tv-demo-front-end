import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class TVshow extends Component {


    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func,
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
            <Fragment>
                <button onClick={this.props.selectHandler}>{this.props.name}</button>
                {this.renderDelete()}
            </Fragment>
        )
    }
}



export default TVshow