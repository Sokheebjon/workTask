import React from "react";
import {Row, Container, Col, Card} from "react-bootstrap"
import characters from '../../assets/characters.png'
import planets from '../../assets/Planets.png'
import starShips from '../../assets/Starships.png'
import {Link} from "react-router-dom";
import style from './main.module.css'


export default function Main() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card>
                        <Link to={'people'}>
                            <Card.Img variant="top" src={characters}/>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link to={'planets'}>
                            <Card.Img variant="top" src={planets}/>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link to={'starships'}>
                            <Card.Img variant="top" src={starShips}/>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}