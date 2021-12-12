import React from 'react'
 import { useState } from 'react';
import {Container , Col , Row , Carousel , Button ,Form , InputGroup } from 'react-bootstrap'
import pulseLogo from '../../images/brnlogopluse.png'
import brnStu1 from '../../images/brn1stu.png'


export default function SignUp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
 
    return (
        <Container  >
        <Row xl={12} className='ml-5 mr-5'>
            <Col xl={6} className='p-0 m-0 ml-5'>
            <Carousel  >
  <Carousel.Item>
    <img
      className="d-block"
      src={brnStu1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt4-_o3PIYsBkYOEYU64gS14zd-w2pwAmQQ&usqp=CAU"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEERdhDuJOauUWk6-fzmYRVsjyvqnnT7s11Q&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
            </Carousel>
     
            </Col>
            <Col xl={6} className='p-0 m-0'>
                <Col  className='signUpCss' >
                <Row xl="12" className='d-flex text-light align-items-end justify-content-center mb-3'>
                    <Col xl="3">
                    <img style={{height:'100px'}}  src="https://com2108anji9701785194project1.netlify.app/assets/brn%20logo.png" alt='logo'/> 
                    </Col>
                    <Col xl="5">
                   <h6>  Learn . Practise . Perform</h6>
                    </Col>
                   
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='p-5 pl-0 pt-2 text-light'>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name as Per Certificates"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sur Name as Per Certificates"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className='mt-4'>
          <Col md="6">
          <Form.Control
    type="password"
    id="inputPassword5"
    placeholder="Enter Password"
    aria-describedby="passwordHelpBlock"
  />
   </Col>
   <Col md="6">
          <Form.Control
    type="password"
    id="inputPassword5"
    placeholder="Re-enter Password"
    aria-describedby="passwordHelpBlock"
  />
   </Col>
   </Row>
  {/* <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text> */}
         

     
 
      
      <Row  md="12" className='mt-4 mb-3'>
          <Col md="4">
          <h6 >Gender</h6>
          </Col>
          <Col md="4">
          <Form.Check
          type="radio" 
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
          </Col>
          <Col md="4">
          <Form.Check 
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
          </Col >  
      </Row>
      <Row  md="12" className='mt-3 mb-3'>
          <Col md="4">
          <h6 >Martial Status</h6>
          </Col>
          <Col md="4">
          <Form.Check
          type="radio" 
          label="Married"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
          </Col>
          <Col md="4">
          <Form.Check 
          type="radio"
          label="Unmarried"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
          </Col > 
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Select State">
        <option>Select State</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
        
      </Form.Select>
    </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group controlId="formFile" md="12" className="mt-4 mb-4">
      <Form.Label>Upload Your Image</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      
      <Button type="submit">Submit</Button>
    </Form>
              
                </Col>
              
            </Col>
        </Row>

    </Container>
    )
}
