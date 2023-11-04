import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { Nav, Navbar, Container, Button, Form, NavDropdown, Card, Col, Row } from 'react-bootstrap'

const Prescription = () => {
  return (
    <div>
      <form>
        <Button
          type="button"
          variant="outline-primary"
          className={"button"}
        >
          Load Prescription
        </Button>
      </form>
    </div>
  )
}

export default Prescription