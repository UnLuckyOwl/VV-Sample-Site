import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, NavbarBrand, NavLink, Nav, NavDropdown } from 'react-bootstrap'
import logo from './media/samplelogo.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import Footer from './footer/Footer'

import { IconContext } from 'react-icons/lib'
import { AiFillPhone } from 'react-icons/ai'

function App() {
    return (
        <>
            <IconContext.Provider value={{ color: '#d90429', size: 30 }}>
                <Navbar bg="nav" sticky="top" expand="lg" collapseOnSelect>
                    <NavbarBrand href="#home" className="logo">
                        <img src={logo} width="110px" />
                    </NavbarBrand>

                    <Navbar.Toggle />
                    <NavbarCollapse>
                        <Nav className="nav-items">
                            <NavLink href="#home">Home</NavLink>

                            <NavLink href="#about">About</NavLink>

                            <NavDropdown title="Services">
                                <NavDropdown.Item href="#buying">
                                    Buying
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#selling">
                                    Selling
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#commercial">
                                    Commercial
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink href="#contact">Contact</NavLink>
                            <NavLink href="tel:1234567890">
                                <AiFillPhone />
                            </NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Navbar>

                <Home />
                <About />
                <Services />
                <Footer />
            </IconContext.Provider>
        </>
    )
}

export default App

// variant="dark"
{
    /* <Navbar.Toggle aria-controls="navbar-dark-example" /> */
}
// menuVariant="dark"
