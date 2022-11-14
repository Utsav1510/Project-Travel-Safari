import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
  <nav className=" navbar navbar-expand-lg bg-primary bg-dark border-bottom border-light" data-aos="fade-down" data-aos-duration="1500">
    <div className='container yo'>  
      <div className="container-fluid ">
        <a id="logo" className="navbar-brand position-absolute " href="#"><img  src={require('../assets/logo4.png')} height="80"width="170" alt=""></img> <span id="logoH"><img  src={require('../assets/logo_head 2.png')} height="60"width="300" alt=""></img></span></a>
        
        
        
        
        
        
        
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item homel">
              <a className="nav-link " aria-current="page" href="#"><Link to="/"className=' Link2'  >Home</Link></a>
            </li>
            <li className="nav-item" id="hover">
              <a className="nav-link" href="#"><Link className=' Link2'  to="/second">Destination Digging</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link className=' Link2'  to="/music">Music Player</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.booking.com/"><Link className=' Link2'  to="/">Bookings </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Footer">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link className=' Link2'  to="/">Feedback</Link></a>
            </li>
          </ul>


        
    <div class="d-flex align-items-right">

   

     
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
       
        
       
      </div>
     
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          
        </ul>
      </div>
    </div>
   
        </div>
      </div>
      </div>
    </nav>
      )
}