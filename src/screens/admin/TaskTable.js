import React from 'react'
import { Table } from 'react-bootstrap';

export default function TaskTables(props) {
  return (
    <div>
    

  <tbody>
    <tr>
      <td>{props.slNo}</td>
      <td>{props.taskId}</td>
      <td>{props.name}</td>
      <td>{props.taskPoints}</td>
      <td>{props.activities}</td>
      <td>{props.submittedTime}</td>
      <td>{props.timeDiff}</td>
      <td>{props.size}</td>
      <td>{props.link}</td>
      <td>{props.currentStatus}</td>
      <td>{props.assigned}</td>
      <td>{props.onTime}</td>
      <td>{props.late}</td>
      <td>{props.no}</td>
    </tr>
    </tbody>

    </div>
  )
}
