import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,form} from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'
import StudentNavbar from './StudentNavbar'

export default function CreateRequest() {
    return (
        <div>
<StudentNavbar/>
             <div className="text"> <h1>Create Request</h1></div> <h3>choose request type, and describe</h3>


<div className="dropdownMenu p-5">
  

<div >
  <form class="form-inline">
<span className="labels" for="username">Request Type: </span>
<select id="">
  <option value="Select">Select</option>
  <option value="New Software Installation">New Software Installation</option>
  <option value="Unable to login thru my User name">Unable to login thru my User name</option>
  <option value="Internet Not Workig">Internet Not Workig</option>
  <option value="Moniter Display Problem">Moniter Display Problem</option>
  <option value="System Hangs Frequently">System Hangs Frequently</option>
  <option value="Audio Not Workig">Audio Not Workig</option>
  <option value="Os Not Booting">Os Not Booting</option>
  <option value="Install X-Code">Install X-Code</option>
  <option value="KeyBoard Not Workig properly">KeyBoard Not Workig properly</option>
  <option value="No Key Board">No Key Board</option>
  <option value="Mouse Not Workig properly">Mouse Not Workig properly</option>
  <option value="Dusty Mouse">Dusty Mouse</option>
  <option value="Dusty Key Board">Dusty Key Board</option>
  <option value="Dusty Desk">Dusty Desk</option>
  <option value="Dusty Room">Dusty Room</option>
  <option value="Cleaning Required for Bathroom<">Cleaning Required for Bathroom</option>
  <option value="Liquid Hand Wash Required">Liquid Hand Wash Required</option>
  <option value="Liquid Dish Wash Required">Liquid Dish Wash Required</option>
  <option value="Chair is Not Clean">Chair is Not Clean</option>
  <option value="Chair is Not Proper">Chair is Not Proper</option>
  <option value="Drinking water is not Clean">Drinking water is not Clean</option>
  <option value="No Dedicated system for me">No Dedicated system for me</option>
  <option value="No Monitor For My System">No Monitor For My System</option>
  <option value="No CPU for My System">No CPU for My System</option>
  <option value="Need a Marker for My Lab">Need a Marker for My Lab</option>
  <option value="Need a Duster for My Lab">Need a Duster for My Lab</option>
  <option value="other">other</option>
</select>
  <br/>


  <span className="labels" for="username">Lab ID: </span>
<select id="">
  <option value="Select">Select</option>
  <option value="L1H">L1H</option>
  <option value="L12">L12</option>
  <option value="L13">L13</option>
  <option value="L14">L14</option>
  <option value="L2H">L2H</option>
  <option value="L21">L21</option>
  <option value="L22">L22</option>
  <option value="L23">L23</option>
  <option value="L24">L24</option>
  <option value="L31">L31</option>
  <option value="L32">L32</option>
  <option value="L33">L33</option>
  </select>

<br/>

  <span className="labels" for="username">Seat Number:</span>
<select id="">
  <option value="Select">Select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  </select>
  </form>

  <form action="/action_page.php">
<span className="labels" for="Discription">Discription:</span>
<textarea id="Discription" name="Discription" rows="4" cols="50">
</textarea>
  <br/>
 <div className="d-flex mr-5"> <button className="btn btn-primary" type="submit">Submit</button></div>
  </form>

</div>
</div>


        </div>
    )
}



       

