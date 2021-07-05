import React, { useContext } from 'react'
import { ContextProvider } from './ContextApi'
import { Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Bookmark() {
    const { dispatch, bookmark } = useContext(ContextProvider)
    console.log(bookmark)

    return (
        <>
            {!bookmark ?
                <h1 className="display-4 text-center container-fluid">Your bookmark is empty :-(</h1>
                :
                <Row className="justify-content-center">
                    {bookmark.map((data, index) => {
                        return (
                            <div key={index} id={data.id}
                                style={{ margin: '5px' }}
                            >
                                <Card className=" shadow" style={{
                                    width: '15rem',
                                    height: "25rem"
                                }}>
                                    <Card.Img variant="top" src={data.img} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.price} /per night</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to={"/detail/" + data.id}><Button variant="primary">Detail</Button></Link>
                                        <Button variant="red" onClick={() => dispatch({type:"DEL_BOOKMARK", payload: data.id })}>Delete</Button>
                                    </Card.Footer>
                                </Card>
                            </div>
                        )
                    })}
                </Row>

            }

        </>
    )
}
