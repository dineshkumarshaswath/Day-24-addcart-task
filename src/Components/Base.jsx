import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row, Col,Badge} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsCartFill } from "react-icons/bs";


function Base({count,setCount}) {
  return (
    <div className='base'>
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New Arrivals
              </NavDropdown.Item>

            </NavDropdown>
          
          </Nav>
          <Button  classname="b1" variant="dark"><BsCartFill size={16}/>cart
          <Badge bg="light">{count}</Badge></Button>
        </Navbar.Collapse>
      
      </Container>
     
    </Navbar>

    <div className='header'>
    <Container  fluid='sm'>
      <Row fluid>
        <Col >
      <h1>Shop In Style</h1></Col> </Row>
      <Row fluid><Col><p className='p'>With this shop hompeage template</p></Col></Row>
          </Container>
      </div>
    
    </div>

  );
}

export default Base;