import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Row, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SearchResult(props) {

    // Props location is "search keyword" which pass from header.js by react router
    const searchKey = props.location.state

    // After data fetch then set the result by useState hook
    const [result, setResult] = useState()

    // console.log(props.location.state)
    // console.log(result)

    // Fetch api in useEffect, reload everytime when search key change
    useEffect(() => {

        // clear previous search 
        setResult("")
        
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/locations/search',
            params: { query: searchKey },
            headers: {
                'x-rapidapi-key': '8481c109b1msh426eeb6ad66b625p1feda9jsnbd3ea58a310a',
                'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setResult(response.data.suggestions[1].entities)
        }).catch(function (error) {
            console.error(error);
        });

    }, [searchKey])

    return (
        <div>
            {!result ?
                <div style={{
                    position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)',
                }}>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="dark" />
                </div>
                :

                <>
                    <h1 className="display-5 text-center container-fluid">{result.length} results for "{searchKey}"</h1>
                    <Row className="justify-content-center">

                        {result.map((data, index) => {
                            return (
                                <div key={index} id={data.id}
                                    style={{ margin: '5px' }}
                                >
                                    <Card className=" shadow" style={{
                                        width: '15rem',
                                        height: "12rem"
                                    }}>
                                        <Card.Body>
                                            <Card.Title>{data.name}</Card.Title>

                                        </Card.Body>

                                        <Card.Footer>
                                            <Link to={"/detail/" + data.destinationId}><Button variant="primary">Detail</Button></Link>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            )
                        })}
                    </Row>
                </>
            }



        </div>
    )
}
