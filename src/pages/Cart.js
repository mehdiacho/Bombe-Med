import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import TopNav from './components/TopNav'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

  return (

    <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"} >
      <TopNav />
      <input className='form-control mr-sm-2 w-8 mx-auto mt-8' type="search" style={{ marginTop: '30px', marginBottom: '20px', width: '520px', height: '55px', borderRadius: '20px' }} placeholder="Search for cart item....." aria-label="Search" />
      <h3 style={{ marginTop: '35px' }}>Your Cart:</h3>
      <Col>
        <Row lg={8}>
          <Card className="item-box" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="fero.png" alt="product" />
            <Card.Body>
              <Card.Title>Item 1</Card.Title>
              <Card.Text>
                Price: P40.00
              </Card.Text>
              <div>Quantity:</div>
              <Button type="button" variant="success" className="button" style={{ borderRadius: '20px' }}>
                +
              </Button>
              <Button type="button" variant="danger" className="button" style={{ borderRadius: '19px', marginLeft: 'px' }}>
                -
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row lg={8}>
          <Card className="item-box" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="fero.png" alt="product" />
            <Card.Body>
              <Card.Title>Item 2</Card.Title>
              <Card.Text>
                Price: P40.00
              </Card.Text>
              <div>Quantity:</div>
              <Button type="button" variant="success" className="button" style={{ borderRadius: '20px' }}>
                +
              </Button>
              <Button type="button" variant="danger" className="button" style={{ borderRadius: '19px', marginLeft: 'px' }}>
                -
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <div className="checkout">
        <p> Subtotal: P3000 </p>
        <Button className={"form-control mr-sm-2 w-2 mx-auto mt-8 fixedbutton"} variant="outline-primary" onClick={() => navigate("/homepage")}> Continue Shopping </Button>
        <Button className={"form-control mr-sm-2 w-8 mx-auto mt-8 fixedbutton"} style={{marginTop:'5px'}} variant="outline-primary" onClick={() => navigate("/checkout")}>
          Checkout
        </Button>
      </div>
    </div >
  )
}

export default Cart