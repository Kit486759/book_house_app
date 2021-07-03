import React from 'react'
import './Booking.css';

export default function Booking() {
    return (
        <>
        
            <div className="card-booking">
                <div className="booking-title"><h1>CONFIRM AND PAY</h1></div>
                <div className="left-side">
                    <div className="trip-detail">
                        <h3>Trip</h3>
                        <h5>Check-in date: 23/23/2323</h5>
                        <h5>checkOut date: 24/24/2424</h5>
                        <h5>Guest(s): 4</h5>
                    </div>

                    <div className="cancel-detail">
                        <h3>Cancellation policy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus, ligula vitae ullamcorper eleifend, metus ligula varius erat, ut tempor dolor tortor sit amet nibh. Aliquam erat volutpat. Praesent posuere risus eget feugiat sodales. Nam efficitur ex velit, nec auctor lorem condimentum sit amet. Sed et laoreet arcu, eget congue lorem. Proin sit amet ullamcorper ligula.</p>
                    </div>
                </div>

                <div className="rigth-side">
                    <div>
                        <h3>House title</h3>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus, ligula vitae ullamcorper eleifend, metus ligula varius erat, ut tempor dolor tortor sit amet nibh.</p>
                    </div>
                    <div className="pay-detail">
                        <h3>Price details</h3>
                        <h5>Rent: $200.00</h5>
                        <h5>Service fee: $20.00</h5>
                        <h5>Cleaning fee: $20.00</h5>
                        <h3>Total: $240.00</h3>

                        <button type="button" className="btn">Confirm and Pay</button>
                    </div>
                    
                </div>
                
            </div>

        </>
    )
}
