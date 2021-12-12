import React from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Tabs,Tab} from 'react-bootstrap'
import ClassAttendance from './ClassAttendance'
import CreateTaskTab from './CreateTaskTab'
import PresentaionTab from './PresentaionTab'
import TaskReview from './TaskReview'
export default function ManageTaskTab() {
    return (
        <div>

<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="presentation" title="Presentation">

 <PresentaionTab/>
    
  </Tab>

  <Tab eventKey="taskReview" title="Task Review">

  <TaskReview/>

  </Tab>

  <Tab eventKey="createTask" title="Create Task" >

      <CreateTaskTab/>
  
  </Tab>
  <Tab eventKey="classAttendance" title="Class Attendance" >

      <ClassAttendance/>
  
  </Tab>

  
</Tabs>

           
        </div>
    )
}
