import React from 'react'
import { Container,Row,Col,Accordion ,Form,Button} from 'react-bootstrap'

export default function CreateTaskTab() {
    return (
<Container>
    <Row>
        
        <Col>
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Task And Interview Presentation</Accordion.Header>
    <Accordion.Body >
        <Row  md="12" className="d-flex m-3 justify-content-center align-items-center">
        <Col md="3">
        <h5>Task to:</h5>
        </Col>
        <Col md="5">
        <Form.Select aria-label="Default select example">
  <option>Choose the Batch</option>
  <option value="2108">2108</option>
  <option value="2110">2110</option>
  <option value="2111">2111</option>
</Form.Select>
        </Col>
        </Row>
    
        <Row  md="12" className="d-flex m-3 justify-content-center align-items-center">
        <Col md="3">
        <h5>Task type:</h5>
        </Col>
        <Col md="5">
        <Form.Select aria-label="Default select example">
  <option>Choose Task Type</option>
  <option value="TTPT">Technical Task:Practice And Theory</option>
  <option value="TTP">Technical Task:Practice </option>
  <option value="TTT">Technical Task:  Theory</option>
  <option value="PR">Practice Resume </option>
  <option value="OR">Original Resume</option>
  
</Form.Select>
        </Col>
        </Row>  <Row  md="12" className="d-flex m-3 justify-content-center align-items-center">
        <Col md="3">
        <h5>Task title:</h5>
        </Col>
        <Col md="5">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    
    <Col sm="12">
      <Form.Control type="password" placeholder="Enter Task Title" />
    </Col>
  </Form.Group>
       
        </Col>
        </Row>
        <Row   >
        <Form md="3" className=" d-flex  ">
        <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
 
    </Form>
        </Row>
        <Row   md="6" className=" d-flex justify-content-center align-item-center  " >
       

      <Button type="submit">Submit form</Button>
   
        </Row>
    
        
      

       
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
        </Col>

    </Row>
</Container>
    )
}
