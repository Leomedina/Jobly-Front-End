import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Jobly</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/companies">Companies</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;