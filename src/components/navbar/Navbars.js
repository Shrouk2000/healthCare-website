import React from 'react'
import { Navbar,Container,NavDropdown , Nav } from 'react-bootstrap'
import './Nav.css';
import logo from '../../Assets/logo.png';
function Navbars() {
  return (
    <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} title='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='active'>Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Service </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
          
          </NavDropdown>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Blog </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>

          </NavDropdown>
         
          <Nav.Link href="#link">Contact US</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
          <Nav.Link href="#link">icon +011213256</Nav.Link>
          <Nav.Link href="#link">
            <button>Contact US <span> &gt; </span></button>
          </Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars
