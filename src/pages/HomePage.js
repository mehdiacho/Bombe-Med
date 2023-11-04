import React from 'react'
import TopNav from './components/TopNav'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Nav, Navbar, Container, Button, Form, NavDropdown, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"} >
            <TopNav />
            <input class='form-control mr-sm-2 w-8 mx-auto mt-8' type="search" style={{ marginTop: '30px', marginBottom: '20px', width: '600px', height: '55px', borderRadius: '20px' }} placeholder="Search for medication....." aria-label="Search" />
            <h4 style={{ marginTop: '35px' }}>What would you like to buy?</h4>

            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 1</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 2</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 3</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 4</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 5</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More details</Button>
                        </Card.Body>
                    </Card >
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{marginBottom:'20px'}}>
                        <Card.Img variant="top" src="fero.png" alt="product" />
                        <Card.Body>
                            <Card.Title>Item 6</Card.Title>
                            <Card.Text>
                                Price: P40.00
                            </Card.Text>
                            <Button variant="outline-primary">More details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* You can add more card columns for additional items */}
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