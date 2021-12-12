import React from 'react'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'
import homeicon from '../../images/homeicon.png'
import refreshlogo from '../../images/refresh.gif'
import writelogo from '../../images/2907616.png'
export default function Task() {
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
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar><div>
            <div style={{color:"dark grey", display:'inline-flex',opacity:'70%'}}>
              <h2>Tasks</h2><h6 style={{paddingTop:'15px'}}>Tasks assigned to You for completion and upload</h6></div>
        <div>  <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/home"><img style={{height:'19px',width:'30px',paddingBottom:'3px'}} src={homeicon} alt='Home icon'/>Home</Nav.Link>
      <Nav.Link href="/task">Tasks</Nav.Link>
    </Nav>
    </Container>
  </Navbar></div>
        <div style={{border:'2px solid #1E90FF'}}>
          <div style={{border:'2px solid #1E90FF',height:'45px', backgroundColor:'dodgerblue',display:'flex',flexDirection:'row'}}><img style={{height:'35px',width:'25px',paddingBottom:'15px',color:'white'}} src={writelogo} alt='refresh logo'/><div><h5 style={{color:'white'}}>Task assigned to you</h5></div>
          <img style={{height:'80px',width:'80px',paddingBottom:'25px',position:'absolute' }} src={refreshlogo} alt='refresh logo'/></div>
          
          </div>
        
          
        </div>
{/* import StudentNavbar from './StudentNavbar'

export default function Task() {
    return (
        <div>
<StudentNavbar/>
            <h1>Tasks</h1>
        </div>
    ) */}
    </div>
    )
}
