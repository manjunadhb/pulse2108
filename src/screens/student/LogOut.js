import React from 'react'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'

export default function LogOut() {
    return (
        <div>

            
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  href="#home"><img src={pulseLogo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link variant="primary" href="/home">HOME</Nav.Link>
      <Nav.Link href="/dsu">DailyStatus Update</Nav.Link>
      <Nav.Link href="/task">Task</Nav.Link>
      <Nav.Link href="/messages">Messages</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/createrequest">Create a Request</NavDropdown.Item>
        <NavDropdown.Item href="/applyleave">Apply Leave</NavDropdown.Item>
        <NavDropdown.Item href="/curriculam">Curriculam</NavDropdown.Item>
      
        
      </NavDropdown>
    </Nav>
    <Nav>
      
    <NavDropdown title="ProfileName" id="collasible-nav-dropdown">

<NavDropdown.Item href="/logout">LogOut</NavDropdown.Item>

</NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            <h1>LogOutPage</h1>
        </div>
    )
}

