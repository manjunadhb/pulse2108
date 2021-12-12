import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import pulseLogo from '../../images/brnlogopluse.png'
import StudentNavbar from './StudentNavbar'

export default function ApplyLeave() {
    return (
        <div>
<StudentNavbar/>


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
            

        <div className='head1'>
                <h3 className='title'>Apply for Leaves </h3>
                <h6 className='subTitle'> Choose Leave type,Dates and Describe. </h6> </div>

   <Navbar className="titleBar" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Home &gt; Apply Leave &gt;  </Navbar.Brand>
    </Container>
  </Navbar>

             <br></br>
  
        <div className='mainPage'>
    
                 <Navbar bg="primary" variant="dark">
                 <Container>
                 <Navbar.Brand href="#home">Leave Details</Navbar.Brand>
                 </Container>
                 </Navbar>

             <br></br> 


     <div className="page">
              
                <div> <label >Leave Type * </label> </div>

                   <div >

											<select >
												<option value="">Select...</option>
												<option value="casual">Casual Leave</option>
												<option value="emergency">Emergency Leave</option>
												<option value="sick">Sick Leave</option>
											</select>

										<div>

									    	<b>Casual Leave:</b> For attending any planned activity.<br></br><b>Sick Leave:</b> For not feeling well, Unable to come to office.<br></br><b>Emergency Leave:</b>For any Urgencies/emergencies.
										
										</div>

                  </div>

     </div>
                    


       <div className='page2'> 

               <div className='datesBox'> 

                   <div className='leaveDate'>  <p >Leave Date(s) * </p> </div>

                    <div  className='leaveDateRange' data-date="10/11/2021" data-date-format="dd/mm/yyyy"> </div>


										<div className='dateStart'>		<input type='text' className='form-control' id="leaveFrom"  name="leaveFrom"/> </div>

										<div className='end'>		<span> till </span>  </div>

                  	<div className='dateEnd'>		<input type='text' className='form-control' id="leaveTill" name="leaveTill"/>  </div>

                </div>  

                       

                <div className='datesDescripte'> 
                      
                     <div className='datesDescripte1'>
                          <b> Total Number of Leaves: 4days </b> 

                        <br></br>

                          <b>Leaves Taken:</b> 0 | <b>Max. Leaves:</b> 4 | <b>Leaves Available:</b> 
                    </div>

                </div>

                   
=======
            <h1>ApplyLeave</h1>
>>>>>>> 63401c4212c868cb78ad2f538e3aa6ea809f5029
        </div>




    <div className='page3'>
                 <div className='leavePage'> <label> Leave Description *</label> </div>

                    <div >
										
                    	<textarea rows="4" cols="50" type="text" maxlength="250" name="leaveDescription" id="leaveDescription" placeholder="Leave Description" className="form-control"></textarea>
											
                      <b> Please describe the reason why are you taking leave </b>
									
                  	</div> 
    
     </div>





                    <div className="buttons">
											<button type="submit" className='applyBtn' id="applyLeave" name="applyLeave">Apply Leave(s)</button>
											<button type="button" className='cancelBtn'>Cancel</button>
										</div>





                    


        </div>
        
        </div>




    )
}
