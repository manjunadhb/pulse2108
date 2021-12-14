import React from 'react'
import {Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import homeicon from '../../images/homeicon.png';
import StudentNavbar from './StudentNavbar'

export default function ApplyLeave() {
    return (
  <div>
        <StudentNavbar/>

 <br/>

        <div className='head1'>
                <h1><sup>Apply for Leaves</sup></h1>
                <h4><sub>Choose Leave type,Dates and Describe.</sub></h4>
                
        </div>




       <Navbar bg="light" variant="light">
          <Container  className='containerHome'>
            <Nav className="me-auto">
             <Nav.Link href="/home"><img style={{height:'19px',width:'25px',paddingBottom:'3px'}} src={homeicon}    alt='Home icon'/>Home   &gt;</Nav.Link>
             <Nav.Link href="/applyleave">Apply Leaves   &gt;</Nav.Link>
            </Nav>
          </Container>
       </Navbar>
      

<br/>

        <Navbar className='containerHome1'  variant="dark">
         <Container >
           <Navbar.Brand href="#home">Leave Details</Navbar.Brand>
         </Container>
        </Navbar>

<br/>
<br/>

     <div className="page">
              
                <div className='leaveType'> <label >Leave Type * </label> </div>
<br/>
                   <div >

											<select >
												<option value="">Select...</option>
												<option value="casual">Casual Leave</option>
												<option value="emergency">Emergency Leave</option>
												<option value="sick">Sick Leave</option>
											</select>

										<div className="pt-2">

									    	<b>Casual Leave:</b> For attending any planned activity.<br/><b>Sick Leave:</b> For not feeling well, Unable to come to office.<br/><b>Emergency Leave:</b>For any Urgencies/emergencies.
										
										</div>

                  </div>

     </div>
                    

<br/>


       <div className='page2'> 

               <div className='datesBox'> 

                   <div className='leaveDate'>  <p >Leave Date(s) * </p> </div>

                    {/* <div  className='leaveDateRange' data-date="10/11/2021" data-date-format="dd/mm/yyyy"> </div> */}


										<div className='dateStart'>		<input type='date' className='form-control' id="leaveFrom"  name="leaveFrom"/> </div>

										<div className='end'>		<span> till </span>  </div>

                  	<div className='dateEnd'>		<input type='date' className='form-control' id="leaveTill" name="leaveTill"/>  </div>

                </div> 


                <div className='datesDescripte pt-2'> 
                      
                     <div className='datesDescripte1'>
                          <b> Total Number of Leaves: 4days </b> 

                        <br/>

                          <b>Leaves Taken:</b> 0 | <b>Max. Leaves:</b> 4 | <b>Leaves Available:</b> 
                     </div>

                </div>

                   


        </div>



<br/> 


        <div className='page3'>
                <div className='leaveDescription'> <label> Leave Description *</label> </div>

                    <div className='descriptionBox'>
										
                    	<textarea rows="4" cols="50" type="text" maxlength="250" name="leaveDescription" id="leaveDescription" placeholder="Leave Description" className="form-control"></textarea>
											
                      <b className="pt-2"> Please describe the reason why are you taking leave </b>
									
                  	</div> 
    
        </div>


                <div className="buttons">
										<button type="submit" className='applyBtn' id="applyLeave" name="applyLeave">Apply Leave(s)</button>
										<button type="button" className='cancelBtn'>Cancel</button>
								</div>



  </div>
        


    )
}
