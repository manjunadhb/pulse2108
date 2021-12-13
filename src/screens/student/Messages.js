import React from 'react'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import {Button,Container,Nav,Navbar,NavDropdown,Table,Form,FormControl} from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'
import StudentNavbar from './StudentNavbar'

export default function Messages() {
    return (
        <div className='Messages'>
 <StudentNavbar/>
 <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">All</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <NavDropdown title="Records" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Category</th>
      <th>Subject</th>
      <th>Delivered on</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Information</td>
      <td>Test Message</td>
      <td>09-Dec-2021 06:1:38 pm</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Information</td>
      <td>Test Message</td>
      <td>09-Dec-2021 06:1:38 pm</td>
    </tr>
   
  </tbody>
</Table>
        </div>
    )
}
