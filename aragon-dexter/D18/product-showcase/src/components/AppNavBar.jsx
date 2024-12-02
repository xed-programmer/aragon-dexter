import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppNavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="/">Product Showcase</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default AppNavBar;