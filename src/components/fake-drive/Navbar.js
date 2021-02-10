import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <div className="d-flex align-items-center justify-content-left">
          <img
            alt="fake g-drive banner"
            width="32%"
            src="https://github.com/CrappyCodeMaker/Fake-G-Drive/blob/main/src/images/FGD.png?raw=true"
          />
        </div>
      </Navbar.Brand>
      <Nav.Link as={Link} to="/user">
        Profile
      </Nav.Link>
    </Navbar>
  );
}
