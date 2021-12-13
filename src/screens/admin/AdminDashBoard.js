import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Tabs,Tab} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import BatchSummary from './BatchSummary'
import FeeReport from './FeeReport'
import ManageTaskTab from './ManageTaskTab'
import ManageUsers from './ManageUsers'
import MessagesTab from './MessagesTab'
import Ranking from './Ranking'
import RequestsTab from './RequestsTab'
export default function AdminDashBoard() {
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




<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
  <Tab eventKey="rankings" title="Rankings">

   <Ranking/>
    
  </Tab>

  <Tab eventKey="feereport" title="Fee Report">

  <FeeReport/>

  </Tab>

  <Tab eventKey="Batchessummary" title="Batches Summary" >
  <BatchSummary/>
  </Tab>
  <Tab eventKey="requests" title="Request" >
  <RequestsTab/>
  </Tab>

  <Tab eventKey="messages" title="Messages" >
  <MessagesTab/>
</Tab>
<Tab eventKey="manageTasks" title="Manage Tasks" >

<ManageTaskTab/>

</Tab>


<Tab eventKey="manageusers" title="Manage Users" >
<ManageUsers/>
</Tab>
</Tabs>
        </div>
    )
}
