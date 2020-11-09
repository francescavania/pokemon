import React, { Component } from 'react'
import { HeaderComponent, PokemonTable } from '../components'
import { Container } from 'react-bootstrap'

export default class MyPokemon extends Component {
    render() {
        return (
            <div>
                <HeaderComponent judul={'My Pokemon'} />
                <Container>
                    <PokemonTable />
                </Container>
            </div>
        )
    }
}
