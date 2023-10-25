import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Landingpage.css';

function Landingpage() {
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between'>
        <Col></Col>
        <Col lg={4}>
          <h3 className='mb-3'> <span className='text-warning'>Buy books online? How can i sell my books? ....</span></h3>
          <p style={{ textAlign: 'justify' }}>  BOOKISH MEDIA is the fastest way to Buy and Sell Books <br></br>
            across all popular indian book store.</p>
          <button className='btn btn-primary mt-5 fw-bolder'>Get Started</button>
        </Col>
        <Col></Col>
        <Col className='ps-5' lg={6}>
          <div>
            <img className='img-fluid ms-5 ps-5' src="https://tse4.mm.bing.net/th?id=OIP.Q0HF9D18thm1GlJ8OE-NKAAAAA&pid=Api&P=0&h=180" alt="landing" />

          </div>        </Col>
      </Row>
      <div className='container mt-5 mb-5 d-flex flex-column align-items-center justify-content-center '>
        <div className='cards w-100 mt-5 d-flex align-items-center justify-content-between' >
        </div>
      </div>
    </>
  )
}

export default Landingpage
