import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>BOOKISH MEDIA</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to={'/'}><Nav.Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold',marginRight:'10px' }} href="#home" >Home</Nav.Link></Link>
            {/* <Link to={''}><Nav.Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} href="#link">Sell</Nav.Link></Link> */}
            <Nav.Link className='btn border rounded ms-5'>

              <Link to={'/Sell'}>
                <li className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                SELL
                </li>
                <Badge className='ms-2 rounded bg-light'></Badge>
              </Link>
            </Nav.Link>

            <Nav.Link className='btn border rounded ms-5'>
              <Link to={'/Buy'} >
                <li className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                BUY
                </li>
                <Badge className='ms-2 rounded bg-light'></Badge>
              </Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header