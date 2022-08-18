import { Link } from 'react-router-dom';
import CardWidget from "./CardWidget";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Ecommerce</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/comida">
            <Nav.Link>
              Comida
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/bebida">
            <Nav.Link>
              Bebida
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <CardWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;