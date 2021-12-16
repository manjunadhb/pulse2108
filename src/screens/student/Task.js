import React from 'react'
// import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import {Container,Nav,Navbar,NavDropdown,Dropdown,DropdownButton,InputGroup} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import pulseLogo from '../../images/brnlogopluse.png'
import homeicon from '../../images/homeicon.png'
import refreshlogo from '../../images/refresh.gif'
import writelogo from '../../images/2907616.png'
import StudentNavbar from './StudentNavbar'

export default function Task() {
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  href="#home"><img src={pulseLogo} alt='pulse logo'></img></Navbar.Brand>
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
</Navbar>
<div>     
<div style={{color:"dark grey", display:'inline-flex',opacity:'70%'}}>
 <h2>Tasks</h2><h6 style={{paddingTop:'15px'}}>Tasks assigned to You for completion and upload</h6></div>
  <div><Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/home"><img style={{height:'19px',width:'30px',paddingBottom:'3px'}} src={homeicon} alt='Home icon'/>Home</Nav.Link>
      <Nav.Link href="/task">Tasks</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
 <div style={{border:'2px solid #1E90FF'}}>
          <div style={{border:'2px solid #1E90FF',height:'45px', backgroundColor:'dodgerblue',display:'flex',flexDirection:'row'}}><img style={{height:'35px',width:'25px',paddingBottom:'15px',color:'white'}} src={writelogo} alt='refresh logo'/>
          <div><h5 style={{color:'white'}}>Task assigned to you</h5></div>
          </div>
          
 <div style={{display:'inline-flex', justifyContent:'space-between',width:'100%',height:'50px'}}>
 <div style={{display:'flex',flexDirection:'row',margin:'3px'}}>
   <InputGroup className="mb-3" >
    <DropdownButton 
      variant="outline-secondary"
      title="All"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">5</Dropdown.Item>
      <Dropdown.Item href="#">10</Dropdown.Item>
      <Dropdown.Item href="#">15</Dropdown.Item>
      <Dropdown.Item href="#">20</Dropdown.Item>
      <Dropdown.Item href="#">25</Dropdown.Item>
    </DropdownButton><h5 style={{paddingTop:'5px'}}>record</h5>
  </InputGroup></div>
  <div style={{display:'inline-flex',justifyContent:'space-between',margin:'3px'}}>
    <h5>My Search:</h5><input  type="text"></input>
    </div>
    </div>
    
  <div>
  <Table responsive="sm" responsive="md" responsive="lg" responsive="xl">
    <thead>
      <tr>
        <th>#</th>
        <th>UID</th>
        <th>ID</th>
        <th> Type</th>
        <th> Title</th>
        <th> Requirements</th>
        <th> Issues</th>
        <th> Build to store</th>
        <th> Deadline</th>
        <th> MaX file size</th>
        <th> Status</th>
        <th> Points earned</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
      <td>2</td>
      <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        
      </tr>
      <tr>
      <td>4</td>
      <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
      <td>5</td>
      <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
      <td>6</td>
      <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
</div>  
</div>   
</div>
        {/* <div>
<StudentNavbar/>
            <h1>Tasks</h1>
        </div> */}
        </div>
 )   
}
