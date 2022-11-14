import React from 'react'
import Headers from './Header'
import Reviews from './Reviews'

export default function () {
  return (
    <>
    <div className="heading-mid" data-aos="zoom-out" data-aos-duration="1100">
          <h1><span><i className="fa fa-leaf" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i> Dig out your Safari Destination&nbsp;&nbsp;&nbsp;&&nbsp;&nbsp;&nbsp; Checkout the site Reviews!<i class="fa fa-arrow-down" aria-hidden="true"></i> <i className="fa fa-leaf" aria-hidden="true"></i> </span></h1>
    </div> 
    <div className="middle">

       <Headers />
        
       <Reviews />
    </div>
    </>
  )
}
