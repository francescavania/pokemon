import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NavbarComponent extends Component {
    render() {
        const { owned } = this.props;
        return (
            <Navbar variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tokemon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/mypokemon">My Pokemon ({owned.length})</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        owned: state.owned
    }
}

export default connect(mapStateToProps)(NavbarComponent)
