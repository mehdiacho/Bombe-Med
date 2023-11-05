import React from 'react'
import { Nav, Navbar, Container, Button, Form, NavDropdown } from 'react-bootstrap'
import {
  UserAuth
} from '../../config/auth-context'
import { useNavigate } from 'react-router-dom'

const TopNav = () => {

  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      alert('Logging out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="\homepage">Bombe-Med</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <NavDropdown title="View" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/prescription">
                Prescription
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav