import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand className='fs-2 mx-auto text-black'>BookStop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Link to="/" style={{textDecoration:"none"}}><li href="/" className='text-black ms-3 fs-4'>Home</li></Link>
          <Link to="/books" style={{textDecoration:"none"}}><li href="/books" className='text-black ms-3 fs-4'>Books</li></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;