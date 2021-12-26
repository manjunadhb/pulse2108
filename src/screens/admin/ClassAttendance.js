import React from 'react'
import { Accordion, Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import StudentStatus from './StudentStatus';


export default function ClassAttendance() {
  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        <StudentStatus />
        <StudentStatus />
        <StudentStatus />
        <StudentStatus />
      </div>
      <div className='mt-4'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Session Details</Accordion.Header>
            <Accordion.Body>
              <Row className='d-flex justify-content-center'>
                <Form className='ms-5'>
                  <Form.Group as={Row} className="mb-3" controlId="sessionTitle">
                    <Form.Label column sm="2">Session Title</Form.Label>
                    <Col lg="4" sm="10">
                      <Form.Control plaintext readOnly defaultValue="2108" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="sessionDate">
                    <Form.Label column sm="2">Session Date</Form.Label>
                    <Col lg="4" sm="10">
                      <Form.Control type="text" placeholder="Session Date" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="sessionStartTime">
                    <Form.Label column sm="2">Session Start Time</Form.Label>
                    <Col lg="4" sm="10">
                      <Form.Control type="text" placeholder="Session Start Time" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="sessionEndTime">
                    <Form.Label column sm="2">Session End Time</Form.Label>
                    <Col lg="4" sm="10">
                      <Form.Control type="text" placeholder="Session End Time" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="duration">
                    <Form.Label column sm="2">Duration</Form.Label>
                    <Col lg="4" sm="10">
                      <Form.Control plaintext readOnly defaultValue="" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="sessionDescription">
                    <Form.Label column sm="2">Session Description</Form.Label>
                    <Col lg="4" sm="10">
                      <FloatingLabel controlId="floatingTextarea" label="Discussed on" className="mb-3">
                        <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }}/>
                      </FloatingLabel>
                      {/* <Form.Control type="text" placeholder="Discussed on" /> */}
                    </Col>
                  </Form.Group>
                </Form>
              </Row>

              <Row   md={6} className=" d-flex justify-content-center align-item-center  " >
                <Button  variant="primary">Update Attendance</Button>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
    </>
    
  )
}