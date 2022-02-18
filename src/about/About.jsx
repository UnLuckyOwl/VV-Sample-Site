import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

import { IconContext } from 'react-icons/lib'
import { GiGiftOfKnowledge, GiJusticeStar } from 'react-icons/gi'
import { FiLink } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegPaperPlane } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'

function About() {
    return (
        <>
            <IconContext.Provider value={{ color: '#8d99ae', size: 60 }}>
                <Container className="about-container" id="about">
                    <div className="about-title">
                        <h2>About</h2>
                        <h1>Who We Are...</h1>
                    </div>
                    <Row className="about-row">
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                {' '}
                                <GiGiftOfKnowledge />
                            </div>

                            <h2>Knowledgeable</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                {' '}
                                <FiLink />
                            </div>

                            <h2>Connected</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                {' '}
                                <AiOutlineHeart />
                            </div>

                            <h2>Passionate</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                <FaRegPaperPlane />
                            </div>

                            <h2>Playful</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                <BsBuilding />
                            </div>

                            <h2>Upstanding</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                        <Col sm="12" md="6" lg="4" className="about-col">
                            <div className="about-icon">
                                <GiJusticeStar />
                            </div>

                            <h2>Effective</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </IconContext.Provider>
        </>
    )
}

export default About
