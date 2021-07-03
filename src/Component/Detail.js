import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import photo from './assets/house.jfif';
import './Detail.css';
import axios from 'axios';
import { ContextProvider } from './ContextApi';
import { Spinner } from 'react-bootstrap';
import { map } from 'bluebird';
import DatePicker from './DatePicker';

export default function Detail(props) {

  // Reuse the days parameter for fetching
  const { today, tomorrow } = useContext(ContextProvider)

  const [detail, setDetail] = useState()
  const [img, setImg] = useState()
  const [qty, setQty] = useState(1)

  // Get the house id from React router url syntax
  const houseId = props.match.params.id

  const apiKey = process.env.REACT_APP_API_KEY
  // Fetch setting
  const fetchInfo = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id: houseId,
      checkIn: today,
      checkOut: tomorrow,
      currency: 'CAD',
      locale: 'en_CA',
      adults1: '1'
    },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    }
  };

  const fetchImg = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
    params: { id: houseId },
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    }
  };

  useEffect(() => {

    axios.all([axios.request(fetchInfo),axios.request(fetchImg)])
      .then(axios.spread((info, img) => {
        setDetail(info.data.data.body)
        setImg(img.data.hotelImages[0].baseUrl.replace("{size}","b"))

        // console.log(info)
        // console.log(img)
      }))
      .catch(function (error) {
        console.error(error);
      });

  }, [])

  console.log(img)

  return (
    <>
{!detail && !img ?
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

        <div className="app">

          <div className="card-wrapper">

            <div className="house-imgs">

              <div className="img-showcase">
                <img src={img} alt="" />
              </div>

              <div className="img-detail">
                {/* What is around */}
                <h3>{detail.overview.overviewSections[1].title}</h3>
                <ul>
                  {detail.overview.overviewSections[1].content.map((info, index) => {
                    return <li key={index}><span>{info}</span></li>
                  })}
                </ul>
              </div>

            </div>

            <div className="house-content">

              <div className="title">
                <h2 className="house-title">{detail.propertyDescription.name}</h2>

                <div className="house-price">
                  <p className="price">Price: <span>
                    {detail.propertyDescription.featuredPrice.currentPrice.plain * qty}
                  </span></p>
                </div>
              </div>

              <div className="house-detail">
                <h2>Description:</h2>
                <p>{detail.propertyDescription.tagline[0].slice(3, -4)}</p>

                {/* Main amenities */}
                <h3>{detail.overview.overviewSections[0].title}</h3>
                <ul>
                  {detail.overview.overviewSections[0].content.map((info, index) => {
                    return <li key={index}><span>{info}</span></li>
                  })}
                </ul>

                

                {/* Address */}
                <h3>Address</h3>
                <p>{detail.propertyDescription.address.fullAddress}</p>


              </div>


              <div className="rental-info">
                <h2>Availability</h2>
                
                {/* <div>
                  <label>Check-in Date: </label>
                  <input className="dates" type="date"></input>
                </div>
                <div>
                  <label>Check-out Date: </label> 
                  <input className="dates" type="date"></input>
                </div> */}

                <DatePicker />
                
                <div>
                  {/* Price x qty */}
                  <label>Guests: </label>                
                  <input className="qty" type="number" min="1" max="10" placeholder="1" onChange={(e) => setQty(e.target.value)}></input>
                </div>
                

                <button type="button" className="btn">Check availability</button>
              </div>

            </div>

          </div>
        </div>

      }
   
    </>

  )
}

   