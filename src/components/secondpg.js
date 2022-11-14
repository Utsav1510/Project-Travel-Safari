import React from 'react';
import { Link } from 'react-router-dom';

export default function secondpg() {
  return (

    













<>
<div className="heading-mid" data-aos="zoom-out" data-aos-duration="1100">
          <h1><span><i className="fa fa-leaf" aria-hidden="true"></i> Explore More!<i className="fa fa-leaf" aria-hidden="true"></i></span> </h1>
    </div> 
    <div class="second_pg" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" >


   
    <div id ="first" className="flex-container flex-wrap d-flex flex-row justify-content-around bd-highlight mb-3">
      <div className="p-2 bd-highlight"><i className="fa fa-solid fa-utensils"></i>Restaurants   </div><div className="horizontal"></div>
      <a className='Link' href='https://www.uber.com/in/en/'><div className="p-2 bd-highlight"><i className="fa fa-car" aria-hidden="true"></i>Cabs</div></a>
      <a className='Link' href='https://www.google.com/maps'><div className="p-2 bd-highlight"><i className="fa fa-map-marker" aria-hidden="true"></i> Maps      </div></a>
      
    </div>


    <div id ="second" className="flex-container flex-wrap d-flex flex-row justify-content-around bd-highlight mb-3">
    <a className='Link' href='https://www.booking.com'> <div className="p-2 bd-highlight"><i className="fa fa-bed" aria-hidden="true"></i><div id="hotels">Hotels</div></div>
    </a>
    <div className="horizontal"></div>

      <a className='Link' href='https://www.google.com/maps'> <div className="p-2 bd-highlight"><img   src={require('../assets/taj-mahal.png')} height="40%" width="40%" alt=""></img>Places</div></a>
      <Link className='Link' to="/music">
          <div className="p-2 bd-highlight"><i className="fa fa-music" aria-hidden="true"></i>Music </div>
      </Link>
      
      
    </div>
      <div  className="container">

      </div>
  </div>
  </>
  )
}
