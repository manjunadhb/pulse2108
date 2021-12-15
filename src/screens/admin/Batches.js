import React,{useState} from 'react';
import {Button,Container,Nav,Navbar,NavDropdown,Table,Modal,Form,Row,Col} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute } from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'

export default function Batches() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>

<AdminNavbar/>
            <h1>Batches Page</h1>

            <Button variant="info" className="m-5" onClick={handleShow}>
        Add New Batch+
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Batch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="text-center"> <label>Courses</label></Col>
         <Col>
          <Form.Select className="me-sm-1" id="inlineFormCustomSelect">
        <option value="0">Select</option>
        <option value="1">Iphone Job Oriented Course</option>
        <option value="2">React</option>
        <option value="3">React Native</option>
        <option value="4">Flutter</option>
        <option value="5">Angular JS</option>
      </Form.Select>
      </Col>
      </Row>

      <Row>
        <Col className="text-center"> <label>Start Date</label></Col>
        <Col> <input></input> </Col>
        </Row> 

         <Row>
        <Col className="text-center"> <label>Batch ID</label></Col>
        <Col> <input></input> </Col>
        </Row> 
        <Row>
        <Col className="text-center"> <label>Fee Details</label></Col>
        <Col>
        <div className="feeDetails">Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details
         Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details 
         Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details 
         Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details Fee Details
         </div>
         </Col>
        </Row> 

        <Row>
            <Col className="text-center"> <label>Batch Status</label></Col>
         <Col>
          <Form.Select className="me-sm-1" id="inlineFormCustomSelect">
        <option value="0">Select</option>
        <option value="1">Yet to Start</option>
        <option value="2">in Progress</option>
        <option value="3">Completed</option>
      </Form.Select>
      </Col>
      </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create Batch
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

 <Table className="table" responsive>
  <thead>
    <tr>
         <th>Id</th>
         <th>Course</th>
         <th>Batch Start Date</th> 
         <th>Proposed End Date</th>
         <th>Batch ID</th>
         <th>Batch Status</th>
         <th>Actual End Date</th>
         <th>Actual Duration</th>
         <th>Difference in Days</th>
         <th>Edit</th>
         <th>Delete</th>
 </tr>
 <tr>
         <td>6</td>
         <td>React</td>
         <td>2021-12-13</td> 
         <td>2022-04-13</td> 
         <td>2112</td> 
         <td>In Progress</td> 
         <td>null</td> 
         <td>2</td> 
         <td>-118</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 

 </tr>
 <tr>
         <td>5</td>
         <td>React</td>
         <td>2021-11-15</td> 
         <td>2022-03-15</td> 
         <td>2111</td> 
         <td>In Progress</td> 
         <td>null</td> 
         <td>27</td> 
         <td>-93</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 

 </tr>
 <tr>
         <td>4</td>
         <td>React</td>
         <td>2021-10-04</td> 
         <td>2021-12-14</td> 
         <td>2110</td> 
         <td>In Progress</td> 
         <td>null</td> 
         <td>118</td> 
         <td>-2</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 

 </tr>
 <tr>
         <td>3</td>
         <td>React</td>
         <td>2021-12-13</td> 
         <td>2022-04-13</td> 
         <td>2108</td> 
         <td>In Progress</td> 
         <td>null</td> 
         <td>2</td> 
         <td>-118</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 

 </tr>
 <tr>
         <td>2</td>
         <td>React</td>
         <td>2021-12-13</td> 
         <td>2022-04-13</td> 
         <td>2106</td> 
         <td>In Progress</td> 
         <td>null</td> 
         <td>2</td> 
         <td>-118</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 

 </tr>
 <tr>
         <td>1</td>
         <td>React</td>
         <td>2021-12-13</td> 
         <td>2022-04-13</td> 
         <td>2103</td> 
         <td>Completed</td> 
         <td>null</td> 
         <td>2</td> 
         <td>-118</td> 
         <td><a href="#">Edit</a></td> 
         <td><a href="#">Delete</a></td> 


 </tr>

  </thead>

</Table>

        </div>
    )
}



