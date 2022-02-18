import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

import { IconContext } from 'react-icons/lib'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function Footer() {
    return (
        <>
            <IconContext.Provider value={{ color: '#8d99ae', size: 40 }}>
                <Container className="footer-container">
                    <Row className="footer-cta">
                        <Col
                            sm="12"
                            md="6"
                            lg="6"
                            className="footer-cta-content"
                        >
                            <h1>
                                Get New Listing Immediately With Our New App
                            </h1>
                        </Col>
                        <Col
                            sm="12"
                            md="6"
                            lg="6"
                            className="footer-cta-content"
                        >
                            <Button
                                className="footer-btn"
                                variant="dark"
                                href="#"
                            >
                                Download
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6" lg="6" className="site-links">
                            <h2>Site Links</h2>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </Col>
                        <Col sm="12" md="6" lg="6" className="footer-social">
                            <a
                                className="fb"
                                // href="#"
                                title="Facebook"
                                rel="noopener noreferrer"
                            >
                                <BsFacebook />
                            </a>
                            <a
                                className="insta"
                                // href="#"
                                title="Instagram"
                                rel="noopener noreferrer"
                            >
                                <BsInstagram />
                            </a>
                            <a
                                className="tt"
                                // href="#"
                                title="Twitter"
                                rel="noopener noreferrer"
                            >
                                <BsTwitter />
                            </a>
                            <a
                                className="yt"
                                // href="#"
                                title="YouTube"
                                rel="noopener noreferrer"
                            >
                                <BsYoutube />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </IconContext.Provider>
        </>
    )
}

export default Footer
