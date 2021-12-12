import React from 'react'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'
import StudentNavbar from './StudentNavbar'

export default function DailyStausUpdate() {
    return (
        <div>
<StudentNavbar/>
            <h1>Daily Status Update</h1>
        </div>
    )
}
