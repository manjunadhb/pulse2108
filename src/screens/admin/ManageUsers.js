import React,{useState} from 'react'
import {Button,Container,Table,Row,Col,Form} from 'react-bootstrap';
import PopUp from './PopupForMangeUser'


export default function ManageUsers() {
  const [popUp, setPopUp] = useState(false)

    const titleStyle={
     padding: '5px',
    fontSize: '28px',
    letterSpacing: '-1px',
    display: 'block',
    color: '#666',
    margin: '0px 0px 15px 0px',
    fontWeight: '300',
    backgroundColor:'#e7e7e4'
    }
    const small ={
        fontSize: '18px',
        letterSpacing: '0px',
        fontWeight: '300',
        color: '#888'
    }
    const scrolableTable={
        width: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    border:' 1px solid #dddddd',
    margin: '10px 0 '
    }
    return (

        <>
            
             
      
      
       <Container fluid>
           <Row className='ml-2'>
               <h3 style={titleStyle}>Manage Users<small style={small}> for Aproving Deleting user</small></h3>
           </Row>
          
       </Container>
       <Container fluid>
       <div style={{border: "1px solid #60aee4",borderTop: '0'}}>
               <Col>
               <div style={{backgroundColor: '#3598dc'}}>
                   <h3 style={{titleStyle,color:'white'}}>Manage User</h3>
               </div>
               <Row>
                   <div className="col-md-6 ">
                       <div className="dataTables_length">
                          <Form>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                             <Form.Label column sm="2">
                                 Records
                             </Form.Label>
                             <Form.Select size="sm" style={{width:'25%'}}>
                                <option>All</option>
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                             </Form.Select>
                          </Form.Group>
                          </Form>
                               </div></div>
                               <div className="col-md-6 " >
                                   <div  className="dataTables_filter" style={{textAlign:'end'}}>
                                      <label column sm="2">
                                       My Search    :
                                      </label>
                                       <input  style={{width:'25%',display:'inline-block'}} type="search" className="form-control input-small input-inline" placeholder="" aria-controls="tasks_table"/>
                                       </div>
                                       </div>
                </Row>
                <Col style={scrolableTable}>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>User</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile No</th>
      <th>Role</th>
      <th>Approve</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><img style={{width:'50px',height:'50px',borderRadius:'50px'}} src='https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/150-1.jpg'/></td>
      <td>Otto</td>
      <td>motto</td>
      <td>@mdo</td>
      <td>123456</td>
      <td>Developer</td>
      <td onClick={()=>{setPopUp(true)}}>Approve </td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
   
  </tbody>
</Table>
    </Col>
               </Col>
           </div>
       </Container>
       <PopUp content="Popup showing" open={popUp} onClose={()=>{setPopUp(false)}}/>
       </>
        
        
    )
}
