import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ContextProvider } from './ContextApi';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';



export default function Feed() {
    const { state } = useContext(ContextProvider)
    console.log(state)
    return (
        <div style={{width:"80vw", backgroundColor:"blue", display:'flex', flexWrap:'wrap', margin:'auto',justifyContent:'center', }}>
            {state.map((data, index) => {
                return (
                        <div key={index} id={data.id} style={{margin:5}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.thumbnailUrl} />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>
                                        {data.title}
                                    </Card.Text>
                                    <Link to={"/detail/"}>
                                        <Button variant="primary">Detail</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                  

                )

            })}
        </div>
    )
}

                    // <div key={index} id={data.id}>
                    //     <p>{data.title}</p>
                    //     <img src={data.thumbnailUrl} alt="image" />
                    // </div>