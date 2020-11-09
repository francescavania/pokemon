import React, { Component } from 'react'
import { HeaderComponent, PokemonTabs } from '../components'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { Container, Button, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: [],
            pokeImg: [],
            owned: {
                nama: '',
                nickname: ''
            },
            redirect: false
        }
    }

    componentDidMount() {
        axios.get(API_URL + this.props.match.url)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon });
                const pokeImg = res.data.sprites.other.dream_world;
                this.setState({ pokeImg });
            })
            .catch(error => {
                console.log(error);
            })
    }

    async handleClick() {
        let random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            const result = await Swal.fire({
                icon: 'success',
                title: 'BERHASIL',
                text: 'Nickname:',
                input: 'text',
                inputPlaceholder: 'Nickname (max 20)',
                inputAttributes: {
                    autocapitalize: 'off',
                    maxlength: 20
                },
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to write something!'
                    }
                }
            })
            const owned = this.state.owned
            owned.nama = this.state.pokemon.name
            owned.nickname = result.value
            this.setState({ owned });
            this.props.addPoke(this.state.owned)
            this.setState({ redirect: true });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal Tangkep!'
            })
        }
    }

    render() {
        const { pokemon, pokeImg, redirect } = this.state;
        if (redirect) {
            return <Redirect to='/mypokemon' />;
        }
        return (
            <div>
                <HeaderComponent judul={pokemon.name} />
                <Container>
                    <Row>
                        <img src={pokeImg.front_default} alt="pokemon" />
                    </Row>
                    <Button onClick={() => this.handleClick()} className="mt-4" variant="outline-primary">Catch Pokemon</Button>
                    <PokemonTabs key={pokemon.id} pokemonMoves={pokemon.moves} PokemonTypes={pokemon.types} />
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoke: (owned) => dispatch({ type: 'ADD_POKE', poke: owned })
    }
}

export default connect(null, mapDispatchToProps)(Detail);