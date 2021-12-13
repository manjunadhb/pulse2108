import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Tabs,Tab} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'
import BatchSummary from './BatchSummary'
import FeeReport from './FeeReport'
import ManageTaskTab from './ManageTaskTab'
import ManageUsers from './ManageUsers'
import MessagesTab from './MessagesTab'
import Ranking from './Ranking'
import RequestsTab from './RequestsTab'
export default function AdminDashBoard() {
    return (
        <div>
           
         <AdminNavbar/>




<<<<<<< HEAD
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3">
  <Tab eventKey="rankings" title="Rankings">
=======
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="rankings" title="Rankings" variant="light">
>>>>>>> 090208b447bd70b97fd6fc2ecaa14aa954a9e7c1

   <Ranking/>
    
  </Tab>

  <Tab eventKey="feereport" title="Fee Report">

  <FeeReport/>

  </Tab>

  <Tab eventKey="Batchessummary" title="Batches Summary" >
  <BatchSummary/>
  </Tab>
  <Tab eventKey="requests" title="Request" >
  <RequestsTab/>
  </Tab>

  <Tab eventKey="messages" title="Messages" >
  <MessagesTab/>
</Tab>
<Tab eventKey="manageTasks" title="Manage Tasks" >

<ManageTaskTab/>

</Tab>


<Tab eventKey="manageusers" title="Manage Users" >
<ManageUsers/>
</Tab>
</Tabs>
        </div>
    )
}
