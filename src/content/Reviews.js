import React from 'react'

export default function Reviews() {
  return (
<div className="row">
  <div className="col-4">
    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#review-1">review 1</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#review-1-1">review 2</a>
          {/* <a className="nav-link ms-3 my-1" href="#review-1-2">review 3</a> */}
        </nav>
        <a className="nav-link" href="#review-2">review 3</a>
        {/* <a className="nav-link" href="#review-3">review 5</a> */}
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#review-3-1">review 4</a>
          {/* <a className="nav-link ms-3 my-1" href="#review-3-2">review 7</a> */}
        </nav>
      </nav>
    </nav>
  </div>

  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
      <div id="review-1">
        <h4>review 1</h4>
        <p>...</p>
      </div>
      {/* <div id="review-1-1">
        <h5>review 1-1</h5>
        <p>...</p>
      </div> */}
      {/* <div id="review-1-2">
        <h5>review 1-2</h5>
        <p>...</p>
      </div> */}
      <div id="review-2">
        <h4>review 2</h4>
        <p>...</p>
      </div>
      <div id="review-3">
        <h4>review 3</h4>
        <p>...</p>
      </div>
      {/* <div id="review-3-1">
        <h5>review 3-1</h5>
        <p>...</p>
      </div>
      <div id="review-3-2">
        <h5>review 3-2</h5>
        <p>...</p>
      </div> */}
        <div id="review-4">
        <h4>review 4</h4>
        <p>...</p>
      </div>
    </div>
  </div>
</div>
 )
}
