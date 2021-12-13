import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Table} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'

export default function Batches() {
    return (
        <div>

<AdminNavbar/>
            <h1>Batches Page</h1>


<button >Add New Batch+</button>
<br/>
<select>All</select>

 <Table responsive>
  <thead>
    <tr>
         <th>Id</th>
         <td></td>
         <th>Course</th>
         <th>Batch Start Date</th> 
         <th>Proposed End Date</th>
         <th>Batch ID</th>
         <th>Batch Status</th>
         <th>Actual End Date</th>
         <th>Actual Duration</th>
         <th>Difference in Days</th>
         <th>Edit</th>
         <th>Delete</th>
 </tr>
  </thead>

</Table>

        </div>
    )
}



