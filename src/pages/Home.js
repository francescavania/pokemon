import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { HeaderComponent } from '../components'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemons: [],
            owned: []
        }
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(res => {
                const pokemons = res.data.results;
                this.setState({ pokemons });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { pokemons } = this.state;
        return (
            <div className="App">
                <HeaderComponent judul={'Pokemon List'} />
                <Container>
                    {pokemons && pokemons.map((pokemon, i) => (
                        <li key={i}><Link className="link" to={`/${i + 1}`}>{pokemon.name}</Link></li>
                    ))}
                </Container>
            </div>
        )
    }
}
