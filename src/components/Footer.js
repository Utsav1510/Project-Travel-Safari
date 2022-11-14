import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div id="Footer">
    <MDBFooter className='text-center'data-aos="fade-up" data-aos-duration="1200" color='white' bgColor=''>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          
          <MDBBtn outline color="light" floating className='m-1 buttonmdb ' href='https://www.facebook.com/login/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 buttonmdb' href='https://twitter.com/' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 buttonmdb' href='https://www.google.co.in/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 buttonmdb' href='https://www.instagram.com/accounts/login/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/login' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/login' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for the website</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4 buttonmdb1'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            <h1>ADVENTURE AWAITS, GO FIND IT</h1>
            Make your trip the best with some crazy memories with your favourite people.

          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>TRAVEL TIPS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                    BLOG
                </li>
                <li>
                    DETINATION
                </li>
                <li>
                    INDIA TRAVEL
                </li>
                <li>
                    TRAVEL INSURANCE
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>RESOURCES</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                    CATEGORIES
                </li>
                <li>
                    CITY GUIDES
                </li>
                <li>
                    TRAVEL RESOURCES
                </li>
                <li>
                    DISCOUNTS AND COUPONS
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>GET IN TOUCH</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                    (+01) 123 456 789
                </li>
                <li>
                    (+91) 987 654 3210
                </li>
                <li>
                    asd@gmail.com
                </li>
                <li>
                    jkl@gmail.com
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>LEGAL</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                    TERMS
                </li>
                <li>
                    SERVICES
                </li>
                <li>  
                  POLICIES
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       
        <a className='text-white' href=''>
            Travel Safari
        </a>
      </div>
    </MDBFooter>
</div>
  );
}