import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Nav,
  Image,
  Carousel,
} from "react-bootstrap";

import {useNavigate} from 'react-router-dom'

export default function Login() {


  
  let navigate = useNavigate()


  return (
    <div className="mainContainer">
      

      


    

      <div className="galleryContainer  lg={7}
              md={6}
              sm={12} ">
      
      </div>

      <div className="loginContainer">
        <Container>
          <Row className="mt-5">
            <Col
              lg={7}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <div className="logoContainer">
                <Image
                  src={
                    "https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
                  }
                  fluid
                  style={{
                    position: "relative",
                    top: "9px",

                    width: "300px",
                  }}
                />
              </div>

              <Form className="form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="formInput"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <br />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Nav.Link href="#home" onClick={()=>{navigate("../common/ForgotPassword") }} style={{ color: "#6b09b5" }}>
                      Forgot Password ?
                    </Nav.Link>
                  </Form.Group>
                </div>

                <div className="d-grid gap-2">
                  <Button
                    variant="success btn-block"
                    type="submit"
                    className="loginPageButton"
                    style={{ backgroundColor: "#6b09b5" }}
                  >
                    Login
                  </Button>
                </div>
                <br />

                <Form.Group className="mb-5 text-center ">
                  <Nav.Link href="#home" style={{ color: "#6b09b5"  }}  onClick={()=>{navigate("../common/SignUp") }} >
                 
                  Not registered yet? <br/> Create an Account 
                  </Nav.Link>
                  <Form.Group className="mb-3" id="copyRight">
                    <h6 className="mt-5  text-center  " style={{
                                                                              position:'relative',
                                                                              bottom:'-70px',
                                                                              color:'#6b09b5'}}>
                      Copyright © 2021 BRN Infotech. All Rights Reserved.
                    </h6>
                  </Form.Group>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      
      
    </div>
  );
}
