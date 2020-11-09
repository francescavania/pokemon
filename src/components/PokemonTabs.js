import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default class PokemonTabs extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { pokemonMoves, PokemonTypes } = this.props;
        return (
            <Tabs className="mt-4" defaultActiveKey="Moves" id="uncontrolled-tab-example">
                <Tab className="mt-3" eventKey="Moves" title="Moves">
                    {pokemonMoves && pokemonMoves.map((move, i) => (
                        <li key={i}>{pokemonMoves[i].move.name}</li>
                    ))}
                </Tab>
                <Tab className="mt-3" eventKey="Types" title="Types">
                    {PokemonTypes && PokemonTypes.map((type, i) => (
                        <li key={i}>{PokemonTypes[i].type.name}</li>
                    ))}
                </Tab>
            </Tabs>
        )
    }
}

