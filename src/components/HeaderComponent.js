import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const HeaderComponent = ({ judul }) => {

    return (
        <Jumbotron fluid>
            <Container>
                <h1>{judul}</h1>
            </Container>
        </Jumbotron>
    )
}

export default HeaderComponent

