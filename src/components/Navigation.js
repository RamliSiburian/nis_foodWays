import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from '../pages/login';
import Register from '../pages/register';
import GlobalButton from './Atoms/Global-button';

function Navigation() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    return (
        <>
            <Navbar expand="lg" sticky="top" className="navbar">
                <Container>
                    <Navbar.Brand><img src='./image/icon.png' alt='Brand' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="me-end">
                            <GlobalButton
                                name='Register'
                                className='link btn text-white me-3 border-0'
                                onClick={() => setShowRegister(true)}
                            />
                            <GlobalButton
                                name='Login'
                                className='link btn text-white me-3 border-0'
                                onClick={() => setShowLogin(true)}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login show={showLogin} setShow={setShowLogin} />
            <Register show={showRegister} setShow={setShowRegister} />
        </>
    )
}

export default Navigation;