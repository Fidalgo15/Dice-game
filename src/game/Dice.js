import React, { Component } from 'react'
import Die from './Die'
import Dbag from '../data/dbag'

export default class extends Component {

    buildDice = (bag) => {
        return bag.map(numOfSides => <Die numSides={numOfSides}/>)
    }

    filterBag = (dieSize) => {
        return Dbag.filter(numSides => (numSides > dieSize))
    }

    render() {

        const filteredBag = this.filterBag(0)

        const diceBag = this.buildDice(filteredBag)

        return (
            <div className="flexContainer">
            {diceBag}
            </div>
        )
    }
}
