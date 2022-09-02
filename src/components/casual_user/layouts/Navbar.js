import React from 'react'

import { Outlet, Link} from "react-router-dom"
import {Navbar, Nav, Container} from "react-bootstrap"

import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar2 from './Navbar2.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const NavBarExample = () => {
  return (
   <>
    <Navbar className="navBg" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className='imagen-logo' src={require('../../../assets/images/user_casual/icon.png')} alt='xd' width={40} />
            
            Restaurante</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="botonl" to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} className="botonl" to="/acerca_de_nosotros">Acerca de nosotros</Nav.Link>
            <Nav.Link as={Link} className="botonl" to="/contactanos">Contactanos</Nav.Link>
            <Nav.Link as={Link} className="botonl" to="/preguntas_frecuentes">Preguntas frecuentes</Nav.Link>


            
           



          <NavDropdown className="botonl" title="Sign in" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/sign_in">Sign in</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sign_up">Sign up
              </NavDropdown.Item>
              <NavDropdown.Divider />
          
            </NavDropdown>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>

   </>
  )
}

export default NavBarExample