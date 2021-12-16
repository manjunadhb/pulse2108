import React from 'react'
import { ButtonToolbar,ButtonGroup,Button, Form,Accordion ,DropdownButton,Dropdown, Table,FormControl,Row,Nav,NavDropdown,Navbar,Container, Col} from 'react-bootstrap';
export default function Ranking() {
    return (
        <div>
            <h1>Please write code in Ranking.js </h1>
            <div className="report">
<Container >
<Row>
    <Col xl={2}>            <label>Report for</label>
</Col>
<Col xl={2}>       
            <Form.Select aria-label="Default select example m-1">
  <option>Open this select menu</option>
  <option value="1">2108</option>
  <option value="2">2106</option>
  <option value="3">2110</option>
  <option value="4">2104</option>
  <option value="5">2112</option>
  <option value="6">2103</option>
  <option value="7">2101</option>

</Form.Select>
</Col>

<Col xl={2}>   
<Button variant="primary">Get Report</Button>
</Col>

</Row>
</Container>

</div>


{/* <Table>
    <caption> */}
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>2108 Started from 16-AUG-2021</Accordion.Header>
    <Accordion.Body>

    <Navbar variant="light" bg="light" expand="lg">
  <Container>


          <DropdownButton id="dropdown-basic-button" title="All">
  <Dropdown.Item href="#/action-1">15</Dropdown.Item>
  <Dropdown.Item href="#/action-2">20</Dropdown.Item>
  <Dropdown.Item href="#/action-3">35</Dropdown.Item>
  <Dropdown.Item href="#/action-1">50</Dropdown.Item>
  <Dropdown.Item href="#/action-2">100</Dropdown.Item>
  <Dropdown.Item href="#/action-3">All</Dropdown.Item>

</DropdownButton>Records


    <Form className="d-flex">
    <Button variant="outline-success">Search</Button>

        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 m-1"
          aria-label="Search"
        />
      </Form>

  </Container>
</Navbar>



<Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Student Name</th>
      <th>Student ID</th>
      <th>Late to office</th>
      <th>Min.Hrs Missed</th>
      <th>Disable Reasons</th>
      <th>Max.score</th>
      <th>Score</th>
      <th>Performs</th>
      <th>last Attendens</th>
      <th>Total Day</th>
      <th>Working Days</th>
      <th>Leaves</th>
      <th>Absents</th>
      <th>Day Attended</th>
      <th>Update Status</th>
      <th>Working Hours</th>
      <th>Worked Hours</th>
      <th>Overall Spend Summary</th>
      <th>Working Per Day</th>
      <th>#</th>
      {/* {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))} */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rajesh</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


      {/* {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))} */}
    </tr>
    



    <tr>
      {/* <td>2</td> */}
      {/* {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
  
  
  

      ))} */}
            <td>1</td>
      <td>Santhosh</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>
    {/* <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
 */}
<tr>
    <td>1</td>
      <td>Dileep</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>


<tr>
    <td>1</td>
      <td>Dastagiri</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>


    <tr>
    <td>1</td>
      <td>sai</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>
    <tr>
    <td>1</td>
      <td>Yaswanth</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>
    <tr>
    <td>1</td>
      <td>Dinesh</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>
    <tr>
    <td>1</td>
      <td>Vamsi</td>
      <td>2108</td>
      <td>0</td>
      <td>0</td>
      <td>minimum  80task</td>
      <td>2940</td>
      <td>-2160</td>
      <td>-73.4694%</td>
      <td>0</td>
      <td>118</td>
      <td>98</td>
      <td>0</td>
      <td>85</td>
      <td>13</td>
      <td>13</td>

      <td>784.00</td>
      <td>12.000</td>
      <td>-6400</td>
      <td>0hours</td>
      <th>0hours</th>


    </tr>

  </tbody>
</Table>



<ButtonToolbar aria-label="Toolbar with button groups"className="group justify-content-end" >
  <ButtonGroup className="me-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
</ButtonToolbar>


    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
        </div>
    )
}
