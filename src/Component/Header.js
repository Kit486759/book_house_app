import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

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
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
