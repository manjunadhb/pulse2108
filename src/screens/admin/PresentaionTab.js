import React from 'react'
import Select from 'bootstrap'
import {Button, Modal, Table,Form,Row,Col,Control,Card} from 'react-bootstrap'
import '../../../src/sass/App.css';
import { useState } from 'react';

export default function PresentaionTab() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

  
  
    return (
        <div>
            <div className="presenParameters" >
                <div className="div1">
                <Row>
    <Form.Label column m={2}>
Choose Current Batch  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
    <option>2108</option>
  <option>2107</option>
  <option>2106</option>
  <option>2105</option>
  <option>2104</option>    </select>    </Col>
  </Row>
  <br />
 

</div>

<div className="div2">
<Button variant="primary">Get Participants</Button>
<Button variant="primary">Choose Participant</Button>
<Button variant="primary">Choose Topic</Button>
<Button variant="primary" onClick={handleShow}>
Review Presentation      </Button>
{/* {values.map((v, idx) => (
        <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))} */}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Review Presentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Select aria-label="Default select example">
  <option>Review Presentation</option>
</Form.Select>

<div className="presenParameters">
    <div className="detailsDiv">
      <h6>Student ID</h6>
      <h6>Batch ID</h6>
      <h6>Selected Topics</h6>
    </div>
    <div className="picDiv">
      <img className="imageDetails" src="https://www.oneindia.com/img/1200x80/2021/12/fgrvycxveaiq8lj-1639369047.jpg" height="100"/>
    </div>

  </div>
        <Card>
  <Card.Header>Presentation History</Card.Header>
  <Card.Body>
    <Card.Title>
        <div>
        <div className="addnewDiv"><Button>Add New +</Button></div>
   <div className="toolsDiv"><Button  variant="danger">Tools </Button></div>
   </div> 
    </Card.Title>
    <Card.Text>
    <Table striped bordered hover variant="danger">
    <thead>
              <tr>
                  <td>#</td>
                  <td>Date <br/>Time</td>
                  <td>Given<br/> Presentation</td>
                  <td>Presentation<br/> Duration</td>
                  <td>Concept <br/>Understanding</td>
                  <td>Representation</td>
                  <td>Technical <br/>Terms</td>
                  <td>Confidence</td>
                  <td>English <br/>Fluency</td>
                  <td>Points <br/>Gained</td>
              </tr>
              </thead>

          </Table>
    </Card.Text>
  </Card.Body>
</Card>
<div className="parameterDiv">
        <Row>
    <Form.Label column m={2}>
Given Presentation  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
    <option>Yes</option>
  <option>No</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Concept Understanding  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
      <option>Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Representation  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
      <option>Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Use Of Technical Terms  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
      <option>Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Dress Attire | Confidence | Body Language  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
      <option>Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Fluency In English  :  </Form.Label>
    <Col>
    <select>
      <option>Select</option>
      <option>Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column m={2}>
Presentation  Duration:  </Form.Label>
    <Col>
    <select>
      <option>Below 3 minutes</option>
      <option>Above 3 minutes</option>
  <option >Below 5 minutes</option>
  <option >Above 5 minutes</option>
  <option >Below 8 minutes</option>
  <option >Above 8 minutes</option>
     </select>    </Col>
  </Row>
  <br />
  <Row>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Remarks:</Form.Label>
    <Col>
    <Form.Control as="textarea" rows={3} placeholder="Review Remarks"/></Col>
  </Form.Group>
  </Row>
  <br/>
  <div><Button variant="primary">Review Presentation</Button>
  </div>

</div>
        </Modal.Body>
      </Modal>
  

      {/* <Modal className="modal-dialog modal-xl modal-dialog modal-dialog-centered modal-dialog-scrollable"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Presentation History</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
            <div>
            <h1>Review Presentation</h1>
            <select class="form-select" aria-label="Default select example">
             <option>Review Presentation</option>
</select>
<h4>Student Id:</h4>
<h4>Batch Id:</h4>
<h4>Selected Topics</h4>
</div>
        <div>
            <div>
            <select class="form-select" aria-label="Default select example">
               <option>Presentation History</option>
</select>
            </div>
          <Table>
              <tr>
                  <td>#</td>
                  <td>Date Time</td>
                  <td>Given Presentation</td>
                  <td>Presentation Duration</td>
                  <td>Concept Understanding</td>
                  <td>Representation</td>
                  <td>Technical Terms</td>
                  <td>Confidence</td>
                  <td>English Fluency</td>
                  <td>Points Gained</td>
              </tr>
          </Table>
          </div>
         <div>
             <div className="presenParameters">
             <div>
         <label>Give Presentation:</label>
         </div>
         <div>
            <select class="form-select" aria-label="Default select example">
  <option value="1">Yes</option>
  <option >No</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
<div>
  <label>Concept Understanding:</label>
  </div>
  <div>
            <select class="form-select" aria-label="Default select example">
  <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
<div>
  <label>Representation:</label>
  </div>
  <div>
            <select class="form-select" aria-label="Default select example">
            <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
  <div>
  <label>Use of Technical Terms:</label>
 </div>
 <div>
            <select class="form-select" aria-label="Default select example">
            <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
  <div>
  <label>Dress Attire | Confidence | Body Language:</label>
  </div>
  <div>
            <select class="form-select" aria-label="Default select example">
            <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
  <div>
  <label>Fluency In English:</label>
  </div>
  <div>
            <select class="form-select" aria-label="Default select example">
            <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <div className="presenParameters">
  <div>
  <label>Presentation Duration:</label>
  </div>
  <div>
            <select class="form-select" aria-label="Default select example">
            <option value="1">Poor</option>
  <option >Average</option>
  <option >Good</option>
  <option >Very Good</option>
  <option >Excellent</option>
  </select>
  </div>
  </div>
  <label>Remarks:</label>

  
<Button variant="primary">Review Presentation</Button>

         </div>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}

</div>

            </div>
            <div className="presenParameters">
            <div className="detailsStu"><h5>Student Details</h5>
            <h6>Sandhya</h6>
            <h6>Anusha</h6>
            <h6>Shwetha</h6>
            <h6>Shiney</h6></div>
            <div className="detailsStu"><h5>Topic Details</h5>
            <h6>Flex</h6>
            <h6>Redux</h6>
            <h6>React Router Dom</h6>
            <h6>Version Controller</h6>


            </div>
            </div>
            </div>

    )
}


