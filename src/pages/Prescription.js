import React from 'react';

import { Button, Form, Row } from 'react-bootstrap';

const Prescription = () => {
  return (
    <div className='container'>
      <Form>
        <Row className='d-flex justify-content-center align-items-center mt-5' >
          <div className='border p-4' style={{marginTop:'300px'}}>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mr-3'>Emeka</div>
              <Button type="button" variant="success" className="button" style={{ borderRadius: '20px' }}>
                +
              </Button>
              <Button type="button" variant="danger" className="button" style={{ borderRadius: '20px' }}>
                -
              </Button>
            </div>
          </div>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <Button type="button" variant="primary" className="search-button mt-4 mx-auto">
            Search
          </Button>
        </div>

      </Form>
    </div>
  );
}
// Consider using a table instead of
export default Prescription;
