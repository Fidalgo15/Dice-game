import React, { Component } from 'react'

export default class extends Component {
    state= {
        roll: 0
    }

    handleClick = () => {
        const numOfSides = this.props.numSides
        this.setState({roll: Math.ceil((Math.random() * numOfSides))})
    }

    render() {
        return (
            <>
                <p>Roll: {this.state.roll}</p>
                <p>Number of Sides: {this.props.numSides}</p>
                <input type="button" value="Roll Die" onClick={this.handleClick} />
            </>
        )
    }

}