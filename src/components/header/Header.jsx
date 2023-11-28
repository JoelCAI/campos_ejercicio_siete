import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-primary ">
            <Container fluid>
                <Navbar.Brand className='text-light' href="/">Joel Campos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className='text-light' href="personajes">Nosotros</Nav.Link>
                        <Nav.Link className='text-light' href="contacto">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2" 
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='text-light border-light'>Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
