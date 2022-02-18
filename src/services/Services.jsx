import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './Services.css'

import house from '../media/house.jpeg'
import selling from '../media/sellinghouse.jpeg'
import com from '../media/commercial.jpeg'

function Services() {
    return (
        <>
            <div className="services-container" id="services">
                <div className="services-title">
                    <h2>Services</h2>
                    <h1>What We Offer...</h1>
                </div>
                <div className="card-container">
                    <Row id="buying">
                        <div className="buying row-title">
                            <h2>Buying</h2>
                        </div>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={house} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={house} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id="selling">
                        <div className="selling row-title">
                            <h2>Selling</h2>
                        </div>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={selling} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={selling} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id="commercial">
                        <div className="commercial row-title">
                            <h2>Commercial</h2>
                        </div>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={com} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" md="6" lg="6" className="services-col">
                            <Card
                                style={{ width: '25rem' }}
                                className="card-bg"
                            >
                                <Card.Img variant="top" src={com} />
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        Lorem
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Earum deserunt
                                        blanditiis nostrum minus amet qui ad rem
                                        consequuntur recusandae fuga.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Services
