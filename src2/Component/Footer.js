import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css';

export default function Footer() {
    return (
        <Container fluid style={{
            position: "absolute",
            height: "200px",
            backgroundColor: "#A4C3B2",
            marginTop: "50px",
            // display:"flex"
        }}>
           
            <Row style={{
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <Col ></Col>
                <Col >Kit So</Col>
                <Col >Gui Gianjope</Col>
                <Col ></Col>
            </Row>
            <Row style={{
                justifyContent: 'center',
                textAlign: 'center',
            }}>
            <p>Copyright 2021 by Kit So | Gui Gianjope. All Rights Reserved.</p>
            </Row>
        </Container>

    )
}
