import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <Navbar
            // bg="dark" variant="dark" 
            style={{
                backgroundColor: "#A4C3B2",
                marginBottom: "30px",
                height:"100px"
            }}>
            <Container>
                <Link to="/">
                    
                <Navbar.Brand><img src="/img/logo.png" alt="logo"/></Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Category</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
