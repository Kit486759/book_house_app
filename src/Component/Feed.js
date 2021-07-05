import React, { useContext } from 'react'
import { ContextProvider } from './ContextApi';
import { Container } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';
import Slide from './Slide';



export default function Feed() {
    const { state } = useContext(ContextProvider)

    // Slice the array to 5 top best seller and pass to carousel slide
    const sortByBestSeller = [...state].slice(0, 5)

    // Use sort method to sort the array by object rating value than pass to best rating slide
    const sortByPrice = ([...state].sort((a, b) => {
        return a.ratePlan.price.exactCurrent - b.ratePlan.price.exactCurrent
    })).slice(0, 5)

    // Sort by rating value
    const sortByRating = ([...state].sort((a, b) => {
        return parseFloat(b.guestReviews.unformattedRating) - parseFloat(a.guestReviews.unformattedRating)
    })).slice(0, 5)


    return (
        <>
            <h1 className="display-4 text-center container-fluid">Best Seller</h1>
            <CarouselSlide data={sortByBestSeller} />
            <Container fluid className=" justify-content-center" >
                <h1 className="display-4 mt-5 text-center container-fluid">Best Price</h1>
                <Slide data={sortByPrice} />
            </Container>
            <Container fluid className=" justify-content-center" >
                <h1 className="display-4 mt-5 text-center container-fluid">Best Rating</h1>
                <Slide data={sortByRating} />
            </Container>
        </>
    )
}

// {state.map((data, index) => {
//     return (
//         <div key={index} id={data.id} style={{ margin: 5 }}>
//             <Card className="shadow-md" style={{
//                 width: '15rem',
//                 height: "25rem"
//             }}>
//                 <Card.Img variant="top" src={data.optimizedThumbUrls.srpDesktop} />
//                 <Card.Body>
//                     <Card.Title>{data.name}</Card.Title>
//                     <Card.Text>{data.neighbourhood}</Card.Text>
//                     <Card.Text>{data.ratePlan.price.current}</Card.Text>

//                 </Card.Body>
//                 <Card.Footer>
//                     <Link to={"/detail/"+ data.id}><Button variant="primary">Detail</Button></Link>
//                 </Card.Footer>
//             </Card>
//         </div>
//     )
// })}