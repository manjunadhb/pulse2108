import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'

export default function Custom() {
    return (
        <div>
<AdminNavbar/>
            <h1>Custom page</h1>
        </div>
    )
}
