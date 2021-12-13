import React from 'react'
import { Table ,Form,Button,FormControl,Accordion} from 'react-bootstrap';
import './App.css';

import TaskTables from './componets/TaskTables';
import TaskTables2 from './componets/TaskTables2';

export default function TaskReview() {
    return (
        <div>
            <Accordion defaultActiveKey="0" className ="p-3 m-3 pt-0 pl-0 pr-0 block-example border border-info">
  <Accordion.Item eventKey="0">
    <Accordion.Header className= "  border  border-info " >2108</Accordion.Header>
    <Accordion.Body className =" block-example border border-info">
    {/* <div className=" p-3 m-3 pt-0 pl-0 pr-0 block-example border border-info"> */}
   
   
    
    <Table className=" w-100" striped bordered hover>
    
  <thead>
    <tr>
      <th>Task No</th>
      <th>Task Type</th>
      <th>Task Title</th>
      <th>Submitted <br/>Details</th>
      <th>Approved</th>
      <th>Rejected</th>
     
      <th>Review <br/>Pending</th>
      <th>Assigned Time</th>
      <th>Dead Line</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><TaskTables2 taskNo="144" /></td>
      <td><TaskTables2  taskType = "TechnicalTask-Theory()"/></td>
      <td> <TaskTables2 taskTitle = "Pulse Project-Web-Milestone 1" /></td>
      <td><TaskTables2 SubmittedDetails="Submitted:5 (On Time:5 Late:0) No:23 Total:28"/> </td>
      <td> <TaskTables2  approved = "0"/></td>
      <td> <TaskTables2  rejected ="0"/></td>
      <td><TaskTables2 reviewPending ="5"/></td>
      <td><TaskTables2 assignedTime="Thu,09 December 2021 06:41:34PM"/></td>
      <td><TaskTables2  deadLine="Mon,13 December 2021 03:00:00PM "/></td>
      
    </tr>
    <tr>
    <td><TaskTables2 taskNo="143" /></td>
      <td><TaskTables2  taskType = "TechnicalTask-Practical(UI and Code)"/></td>
      <td> <TaskTables2 taskTitle = "Pulse Project-Web-Milestone 1" /></td>
      <td><TaskTables2 SubmittedDetails="Submitted:5 (On Time:5 Late:0) No:23 Total:28"/> </td>
      <td> <TaskTables2  approved = "0"/></td>
      <td> <TaskTables2  rejected ="0"/></td>
      <td><TaskTables2 reviewPending ="5"/></td>
      <td><TaskTables2 assignedTime="Thu,09 December 2021 06:41:34PM"/></td>
      <td><TaskTables2  deadLine="Mon,13 December 2021 03:00:00PM "/></td>
    </tr>
    
     
 
 
   
  </tbody>
</Table>

{/* </div> */}

    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
   
<Accordion defaultActiveKey="0" className ="p-3 m-3 pt-0 pl-0 pr-0 block-example border border-info">
  <Accordion.Item eventKey="0">
    <Accordion.Header className= "  border  border-info " >Submission Details</Accordion.Header>
    <Accordion.Body className =" block-example border border-info">
    <div className=" p-3 m-3 pt-0 pl-0 pr-0 block-example border border-info">
    <div className="d-flex justify-content-end m-3 ">
    <Form className="d-flex justify-content-end w-25 " >
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </div>
    <Table className=" w-100" striped bordered hover>
    
  <thead>
    <tr>
      <th>#</th>
      <th>Task Id</th>
      <th>Name</th>
      <th>Task<br/>Points</th>
      <th>Activities</th>
      <th>Submitted <br/>Time</th>
      <th>Time <br/>Diff</th>
      <th>Size</th>
      <th>Link</th>
      <th>Current <br/>Status</th>
      <th>Assigned</th>
      <th>On Time</th>
      <th>Late</th>
      <th>No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
     <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
    <tr>
      <td><TaskTables slNo="1" /></td>
      <td><TaskTables  taskId = "70918"/></td>
      <td> <TaskTables name = "N.SNEHA" /></td>
      <td><TaskTables taskPoints="0/100"/> </td>
      <td> <TaskTables  activities = "0"/></td>
      <td> <TaskTables  submittedTime ="NA"/></td>
      <td><TaskTables timeDiff ="NA"/></td>
      <td><TaskTables size="NA"/></td>
      <td><TaskTables  link="NA"/></td>
      <td><TaskTables  currentStatus=""/></td>
      <td><TaskTables assigned="144"/></td>
      <td><TaskTables onTime="50"/></td>
      <td><TaskTables  late="69"/></td>
      <td><TaskTables no="25"/></td>
    </tr>
  </tbody>
</Table>

</div>

    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>   
        </div>
    )
}




