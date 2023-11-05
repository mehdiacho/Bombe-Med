import React from 'react'
import TopNav from './components/TopNav'
import 'react-multi-carousel/lib/styles.css';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();


    return (
        <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"} >
            <TopNav />
            <input className='form-control mr-sm-2 w-8 mx-auto mt-8' type="search" style={{ marginTop: '30px', marginBottom: '20px', width: '520px', height: '55px', borderRadius: '20px' }} placeholder="Search for medication....." aria-label="Search" />
            <h4 style={{ marginTop: '35px' }}>What would you like to buy?</h4>

            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 1</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 2</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 3</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 4</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 5</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card >
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="item-box" style={{ marginBottom: '20px' }}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 6</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button
                type="button"
                variant="outline-primary"
                className={"floating-button"}
                onClick={() => {
                    navigate('/prescription')
                    // Handle the click event for creating a prescription
                }}
            >
                Load Prescription
            </Button>

        </div>
    )
}


export default HomePage