import React, {useState} from 'react'
import TopNav from './components/TopNav'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([]);


    const fetchMedicineData = async (searchTerm) => {
        const url = `http://localhost:8383/facilities/search-medicine?medicine=${encodeURIComponent(searchTerm)}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log("received" + data)
                setSearchResults(data)
                return data;
            } else {
                throw new Error('Search failed');
            }
        } catch (error) {
            console.error('Error fetching medicine data', error);
            return null;
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await fetchMedicineData(search);
            if (data) {
                setSearchResults(data);
            }
        } catch (error) {
            alert('Search failed');
        }
    };



    return (
        <div className={"container-fluid min-vh-100 bg-light d-flex flex-column home-page"} >
            <TopNav />
            <Form onSubmit={handleSubmit}>
                <input className='form-control mr-sm-2 w-8 mx-auto mt-8' type="search"
                       style={{ marginTop: '30px', marginBottom: '20px', width: '520px', height: '55px', borderRadius: '20px' }}
                       placeholder="Search for medication....." aria-label="Search"
                       onChange={(e) => setSearch(e.target.value)}/>
            </Form>
            <h4 style={{ marginTop: '35px' }}>What would you like to buy?</h4>

            <Row>
                {searchResults.map((facility) => (
                    <Col sm={12} md={6} lg={4} key={facility.id}>
                        <Card className="item-box" style={{ marginBottom: '20px' }}>
                            {/* Display facility information here */}
                            <Card.Body>
                                <Card.Title>{facility.name}</Card.Title>
                                <Card.Text>
                                    Provider: {facility.providerId}
                                </Card.Text>
                                <Card.Text>
                                    Price: {facility.price}
                                </Card.Text>
                                {/* Add more details as needed */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
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