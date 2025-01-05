import React from 'react'
import { Navbar,Container,NavDropdown , Nav } from 'react-bootstrap'
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch ,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
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
          <Link to ="#home" className='active'>Home</Link>
          <Link to="#link">Link</Link>
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
         
          <Link to="/contact">Contact US</Link>
          <Nav.Link href="#link">
            <FontAwesomeIcon icon={faSearch}/>
          </Nav.Link>
          <Nav.Link href="#link">
            <FontAwesomeIcon icon={faPhone} className="phone"/>
             +011213256</Nav.Link>
          <Nav.Link href="#link">
            <button>Contact US <span><FontAwesomeIcon icon={faArrowLeft}/> </span></button>
          </Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars
