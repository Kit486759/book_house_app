import React, { useState } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

    // Set search state by hook , listen search box input
    const [search, setSearch] = useState("")

    // function clear search bar after search button click
    const clearSearchBox = () => {
        const searchBox = document.getElementById("searchInput")
        searchBox.value = ""
    }

    return (
        <Navbar
            // bg="dark" variant="dark" 
            style={{
                backgroundColor: "#A4C3B2",
                marginBottom: "30px",
                height: "100px"
            }}>
            <Container>

                <Navbar.Brand><img src="/img/logo.png" alt="logo" /></Navbar.Brand>

                <Nav className="me-auto">
                    <Link to={"/"}
                        style={{
                            color: "rgba(0,0,0,.5)",
                            padding: ".5rem 1rem",
                            textDecoration: "none"
                        }}>Home</Link>
                    <Link to={"/bookmark"}
                        style={{
                            color: "rgba(0,0,0,.5)",
                            padding: ".5rem 1rem",
                            textDecoration: "none"
                        }}>
                        Bookmark
                    </Link>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search city....."
                            className="mr-2"
                            id="searchInput"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Link to={{ pathname: "/search/" + search, state: search }} onClick={() => clearSearchBox()}>
                            <Button variant="outline-success" >Search</Button>
                        </Link>
                    </Form>
                </Nav>
            </Container>
        </Navbar>
    )
}
