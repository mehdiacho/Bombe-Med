import React from 'react'
import {Button, Card, Col, Row, CardTitle, CardSubtitle, FormGroup, CardBody, CardImg, CardText } from 'react-bootstrap'
const MoreDetails = () => {
  
  return (
    <Card className="product-details">
    <Row>
      <Col sm="12" md="4">
        <CardImg
          left="true"
          width="100%"
          src={``}
          alt=""
        />
      </Col>a
      <Col sm="12" md="8">
        <CardBody>
          <CardTitle></CardTitle>
          <CardText></CardText>
          <CardSubtitle>
            <strong>Price: P50</strong>
          </CardSubtitle>
          <CardSubtitle>items Left: 40</CardSubtitle>
          <div>
            <CardSubtitle>Sizes:</CardSubtitle>
            <div className="sizes">
            </div>
          </div>
          <div>
            <FormGroup className="quantity">
              <label for="exampleSelect">Selected items</label>
              <input
                type="select"
                name="quantity"
                id="exampleSelect"
              >
              </input>
            </FormGroup>
          </div>
          <Button className="btn btn-primary-outline">Add to Cart</Button>
        </CardBody>
      </Col>
    </Row>
  </Card>
  )
}

export default MoreDetails