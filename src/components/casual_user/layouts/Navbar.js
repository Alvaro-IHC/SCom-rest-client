import React from 'react'
import Button from 'react-bootstrap/Button';
import { Outlet, Link} from "react-router-dom"
import {Navbar, Nav, Container} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/acerca_de_nosotros">Acerca de nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contactanos">Contactanos</Nav.Link>
            <Nav.Link as={Link} to="/preguntas_frecuentes">Preguntas frecuentes</Nav.Link>


            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>



          <NavDropdown title="Sign in" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sign in</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Log out
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