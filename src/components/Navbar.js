import React from 'react'

export default function navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg ">
    <div className='container'>  
      <div className="container-fluid">
        <img src="aset_20.png"></img>
        <a className="navbar-brand" href="#"><img src="aset_20.jpg" alt="LOGO"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active">
              <a className="nav-link link-light " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">Galary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}
