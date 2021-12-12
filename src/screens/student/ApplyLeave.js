import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import pulseLogo from '../../images/brnlogopluse.png'
import StudentNavbar from './StudentNavbar'

export default function ApplyLeave() {
    return (
        <div>
<StudentNavbar/>

 

        <div className='head1'>
                <h3 className='title'>Apply for Leaves </h3>
                <h6 className='subTitle'> Choose Leave type,Dates and Describe. </h6> </div>

   


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
        
        




    )
}
