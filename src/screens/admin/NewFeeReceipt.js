import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'

export default function NewFeeReceipt() {
    return (
        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  href="/home"><img src={pulseLogo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link variant="primary" href="/dashBoard">DashBoard</Nav.Link>
     <NavDropdown title="Manage" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/student">Student</NavDropdown.Item>
        <NavDropdown.Item href="/batches">Batches</NavDropdown.Item>
        <NavDropdown.Item href="/holidays">Holidays</NavDropdown.Item>
        <NavDropdown.Item href="/Courses">Courses</NavDropdown.Item>
        <NavDropdown.Item href="/appSearch">App Search sync</NavDropdown.Item>
        <NavDropdown.Item href="/employee">Employees</NavDropdown.Item>
        <NavDropdown.Item href="/feereceipt">Fee Receipt</NavDropdown.Item>
        <NavDropdown.Item href="/newfeereceipt">New Fee Receipt</NavDropdown.Item>
        <NavDropdown.Item href="/adminMessage">Message</NavDropdown.Item>
        <NavDropdown.Item href="/adminTask">Task</NavDropdown.Item>
        <NavDropdown.Item href="/enquiry">Enquiry</NavDropdown.Item>
        <NavDropdown.Item href="/poll">Poll</NavDropdown.Item>
        <NavDropdown.Item href="/notice">Notice</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Reports" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/individualstudent">Individual Student</NavDropdown.Item>
        <NavDropdown.Item href="/batch">Batch</NavDropdown.Item>
        <NavDropdown.Item href="/custom">Custom</NavDropdown.Item>
        <NavDropdown.Item href="/attedence">Attedence</NavDropdown.Item>
        <NavDropdown.Item href="/fee">Fee</NavDropdown.Item>
        <NavDropdown.Item href="/communication">Communiction</NavDropdown.Item>
        <NavDropdown.Item href="/studentList">Student List</NavDropdown.Item>
        <NavDropdown.Item href="/ticket">Ticket</NavDropdown.Item>
         <NavDropdown.Item href="/assignment">Assignment</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link variant="primary" href="/setting">Settings</Nav.Link>

    </Nav>
    <Nav>
      
      
      <NavDropdown title="ProfileName" id="collasible-nav-dropdown">

        <NavDropdown.Item href="/adminLogout">LogOut</NavDropdown.Item>

     </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            <h1>New Fee Receipt page </h1>
        </div>
    )
}
