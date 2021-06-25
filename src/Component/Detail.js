import React from 'react';
import {Link} from 'react-router-dom';
import photo from './assets/house.jfif';
import './Detail.css';

export default function Detail() {
    return (
        <div className="app">
        
            <div className="card-wrapper">

                <div className="house-imgs">

                  <div className="img-showcase">
                    <img src={photo} alt=""/>
                  </div>
                  
                </div>

                <div className="house-content">

                    <div className="title">                   
                      <h2 className="house-title">House Lorem</h2>

                      <div className="house-price">
                        <p className="price">Price: <span>$222,22 / Day</span></p>
                      </div>
                    </div> 
                     
                    <div className="house-detail">
                      <h2>Description:</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan justo quis felis sodales, id sodales libero rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel fringilla augue, vel aliquam leo. Phasellus sed risus quam. Integer volutpat mi a eros congue, a facilisis quam convallis. Nunc justo ipsum, commodo id gravida sit amet, congue sed nisi. Donec varius, nibh viverra pellentesque gravida, nulla erat suscipit risus, a posuere neque ipsum ultricies tortor. Suspendisse ullamcorper volutpat arcu, quis condimentum velit efficitur id.</p>
                      <ul>
                        <li><span>Kitchen</span></li>
                        <li><span>Free parking on premises</span></li>
                        <li><span>Pets allowed</span></li>
                        <li><span>Backyard</span></li>
                        <li><span>Wifi</span></li>
                      </ul>
                    </div>

                    
                    <div className="rental-info">
                      <label>Guests:</label>
                      <input type="number" min="1" max="10"></input>
                      <button type="button" className="btn">Availability</button>                      
                    </div>

                </div>
              
            </div>   
            <Link to={"/"}><button>Go to Home</button></Link>               
      </div>         
    )
}