import React from 'react';

import { Navbar, NavDropdown, Button, Nav, Form, Icon } from 'react-bootstrap';

const Menu = ({ component: Component, ...rest }) => (
  <Navbar fixed="top" bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/">Corridas</Nav.Link>
      </Nav>
      <Form inline>
        <NavDropdown title="Minha Conta" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Minhas viagens</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);


export default Menu;