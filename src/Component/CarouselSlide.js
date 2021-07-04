import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CarouselSlide(props) {

    return (
        <>

            <Carousel className="d-block w-50 container-fluid">
                {props.data.map((data, index) => {
                    return (
                        
                            <Carousel.Item key={index}>
                                <Link to={"/detail/"+ data.id}>
                                <img
                                    className="d-block w-100 rounded"
                                    src={data.optimizedThumbUrls.srpDesktop}
                                    alt="Slide"
                                />
                                <Carousel.Caption >
                                    <Container className="d-block w-100" style={{ backgroundColor: "rgb(189,189,189,0.5)", width: "100vw" }}>
                                        <h3>{data.name}</h3>
                                        <p>{data.ratePlan.price.current}</p>
                                    </Container>
                                </Carousel.Caption>
                                 </Link>
                            </Carousel.Item>
                       
                    )
                })}
            </Carousel>
        </>
    )

}