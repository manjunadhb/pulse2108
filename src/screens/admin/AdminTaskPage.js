import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'

export default function AdminTaskPage() {
    return (
        <div>

<AdminNavbar/>
            <h1>Admin task Page</h1>
        </div>
    )
}
