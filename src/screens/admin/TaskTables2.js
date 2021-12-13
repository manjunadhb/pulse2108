import React from 'react'

export default function TaskTables2(props) {
  return (
    <div>
      <tbody>
    <tr>
      <td>{props.taskNo}</td>
      <td>{props.taskType}</td>
      <td>{props.taskTitle}</td>
      <td>{props.SubmittedDetails}</td>
      <td>{props.approved}</td>
      <td>{props.rejected}</td>
      <td>{props.reviewPending}</td>
      <td>{props.assignedTime}</td>
      <td>{props.deadLine}</td>
      
    </tr>
    </tbody>
    </div>
  )
}


