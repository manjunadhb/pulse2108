import React from 'react'
import {Button,Container,Table,Row,Col,Form} from 'react-bootstrap';

export default function PopupForMangeUser(props) {
    const popupStyles={
        display:'inlineBlock',
        width:'90vw',
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        zIndex:'1000',
        
        color:'black'
    }
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
       const popUpMainCon={
           position:'fixed',
           top:'0',
           left:'0',
            display:'inlineBlock',
            width:'100vw',
            height:'100vh',
            backgroundColor:'#0000007d'
       }

    if(!props.open) return null
    return (
        <div style={popUpMainCon}>
        <div style={popupStyles}>
             <Container fluid>
       <div style={{border: "1px solid #60aee4",borderTop: '0',display:'inline-block',width:'100%',backgroundColor:'white',marginTop:'2%'}}>
               <Col>
               <div style={{backgroundColor: '#3598dc'}}>
                   <h5 style={{titleStyle,color:'white'}}>  New Fee Recipt</h5>
               </div>
               <div style={{margin:'3%',textAlighn:'center'}}>
               <Form className="ms-5">
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10" className='border-start'>
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>
   <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      First Name
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="First name" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Last Name
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="Last name" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Choose Batch
    </Form.Label>
    <Col sm="5" className='border-start'>
    <Form.Select aria-label="Default select example">
  <option>Select Batch</option>
  <option value="2108">2108</option>
  <option value="2110">2110</option>
  <option value="2111">2111</option>
</Form.Select>
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Student Id
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="Student Id" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Number Of Installment
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="0" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Amount
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="0" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Receipt No
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="text" placeholder="0" />
    </Col>
  </Form.Group>
  <hr></hr>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Payment Date
    </Form.Label>
    <Col sm="5" className='border-start'>
      <Form.Control type="date" placeholder="" />
    </Col>
  </Form.Group>
  <Col sm="5" >
  <Button className="mx-2" variant="primary">Generate Receipt</Button>
  <Button variant="secondary" onClick={props.onClose}>Cancel</Button>
    </Col>
 
  
</Form>
               </div>
             
             
               </Col>
           </div>
       </Container>
            
        </div>
        </div>
    )
}
