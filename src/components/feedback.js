import React from 'react'

export default function feedbackform() {
  return (
<div class="container allc" id="feedback" style={require('./feedback.css')}>
        <div className="container_! " id="feedback">
            <h1>Feedback Form</h1>
            <h4>We would like to hear your thoughts , concerns, suggestions or problems with anytjing so we can improve!
            </h4>
            <hr />
            <h2>Feedback type</h2>
            <div className="check">
                <input type="checkbox" id='c1' />
                <label htmlFor="c1">Comments</label>
                <input type="checkbox" id='c2' />
                <label htmlFor="c2">Suggestions</label>
                <input type="checkbox" id='c3' />
                <label htmlFor="c3">Questions</label>
                <hr />
                <p> <label htmlFor="textarea">Describe Your Feedback</label>
                </p>
                <textarea name="textarea" id="" cols="30" rows="10"></textarea>
                <hr/>
            </div>
        </div>
        <div class="container">
            <form>
                <div class="mb-3name">
                    <label for="exampleInputEmail1" class="form-label">Name :</label>
                    <div class="first">
                        <input type="text" class="form-control" id="exampleInputEmail1_1" aria-describedby="emailHelp" />
                        <div id="Firstname" class="form-text">First Name</div>
                    </div>
                    <div class="last">
                        <input type="text" class="form-control" id="exampleInputEmail1_2" aria-describedby="emailHelp" />
                        <div id="Lastname" class="form-text">Last Name</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>  )
}