import React from 'react'
import { Col, Figure, Form, ListGroup, Row } from 'react-bootstrap'


export default function StudentStatus() {

    let studentProfile = ()=>
    {
        alert("Open Student Profile")
    }

    return (
        <div className='border border-dark p-4 w-50'>
        <Row>
            <Col>
            {/* <Figure>
                <Figure.Image width={150} height={150} alt="" src="https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387963x2.jpg?impolicy=website&width=510&height=356" roundedCircle/>
            </Figure> */}
                <img className='rounded-circle' style={{width:"150px",height:"150px"}} src="https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387963x2.jpg?impolicy=website&width=510&height=356" alt='student_image'></img>
            </Col>
            <Col>
                <ListGroup variant="flush warning">
                    <ListGroup.Item action onClick={studentProfile} variant='primary'>Name</ListGroup.Item>
                    <ListGroup.Item>RANK</ListGroup.Item>
                    <ListGroup.Item>POINTS</ListGroup.Item>
                    <ListGroup.Item>PERCRNTAGE</ListGroup.Item>
                    <ListGroup.Item>CLASSES ATTENDED</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        <Row>
            <Form className='text-center mt-3'>
                <Form.Label>Status :</Form.Label>
                <Form.Check inline type="radio" label="Present" name="status" id='inline-radio-1' />
                <Form.Check inline type="radio" label="Abscent" name="status" id='inline-radio-2' />
            </Form>
        </Row>
        </div>
    )
}
