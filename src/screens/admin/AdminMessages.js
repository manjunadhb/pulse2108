import { React,useState } from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Modal} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'


export default function Meesages() {
    
     const [show, setShow] = useState(false);
    return (
        <div>
             <AdminNavbar/>
            

       

      <table className="tabClass">
        <tr className="rowClass">
          <th>Msg UID.</th>
          <th>Category</th>
          <th>Subject</th>
          <th>Sent to</th>
          <th>read/unread</th>
          <th>Sent By</th>
          <th>Delivered On</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
      </table>








        </div>
    )
}
