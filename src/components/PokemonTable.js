import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

class PokemonTable extends Component {
    handleClick(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your pokemon has been deleted.',
                    'success'
                )
                this.props.delPoke(id)
            }
        })
    }
    render() {
        const { owned } = this.props;
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th width="3%">#</th>
                        <th>Pokemon</th>
                        <th>Nickname</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {owned && owned.map((own,i) => (
                        <tr key={own.id}>
                            <td width="3%">{i+1}</td>
                            <td>{own.poke.nama}</td>
                            <td>{own.poke.nickname}</td>
                            <td width="5%"><Button onClick={() => this.handleClick(own.id)} variant="outline-primary">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        owned: state.owned
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delPoke: (id) => dispatch({ type: 'DEL_POKE', poke: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonTable);