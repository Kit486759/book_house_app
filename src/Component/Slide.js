import React,{useContext} from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { ContextProvider } from './ContextApi';

export default function Slide(props) {

const {setBookmark} = useContext(ContextProvider)

    return (
            <Row className="justify-content-center">
                {props.data.map((data, index) => {
                    return (
                        <div key={index} id={data.id}
                        style={{margin:'5px'}}
                        >
                            <Card className=" shadow" style={{
                                width: '15rem',
                                height: "25rem"
                            }}>
                                <Card.Img variant="top" src={data.optimizedThumbUrls.srpDesktop} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>{data.neighbourhood}</Card.Text>
                                    <Card.Text>{data.ratePlan.price.current} /per night</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={"/detail/" + data.id}><Button variant="primary">Detail</Button></Link>
                                    <Button variant="red" onClick={()=>setBookmark(data.id,data.name, data.optimizedThumbUrls.srpDesktop, data.ratePlan.price.current )}>Bookmark</Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </Row>

      

    )
}
