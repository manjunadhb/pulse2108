import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import Home from './Home'
import StudentNavbar from './StudentNavbar'




export default function StudentDashboard() {

  

    return (
        <div>
       <StudentNavbar/>
        </div>
    )
}
