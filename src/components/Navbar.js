import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const token = localStorage.getItem("token")

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/"><strong>Jobly</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {token ? <>
            <Nav.Link href="/companies">Companies</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/logout">Logout </Nav.Link>
          </>
            : <Nav.Link href="/login">Login</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;