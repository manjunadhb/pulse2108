import { React,useState } from 'react'
import {Button,Container,Nav,Navbar,NavDropdown,Modal} from 'react-bootstrap'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'
import pulseLogo from '../../images/brnlogopluse.png'
import AdminNavbar from './AdminNavbar'


export default function Meesages() {
    
     const [show, setShow] = useState(false);
    return (
        <div>
             <AdminNavbar/>
            

             <Button variant="primary" onClick={() => setShow(true)}>
        Messages
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Review and Get Instalment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formMessages">
            <div className="labelName">
              <label className="labelMessages">Send to*</label>
              <select className="selectMessages" multiple>
                <option selected="Batches">Select Batch</option>
                <option value="2111">2111</option>
                <option value="2110">2110</option>
                <option value="2108">2108</option>
                <option value="2106">2106</option>
                <option value="2103">2103</option>
                <option value="2101">2101</option>
              </select>
            </div>
            <div>
              <label className="selectMessages1">Category*</label>
              <select>
                <option selected="catG">Select</option>
                <option value="Information">Information</option>
                <option value="Opportunity">Job Opportunity</option>
                <option value="FeeReminder">Fee Reminder</option>
                <option value="Irregular">Irregular</option>
                <option value="LatetoOfc">Late to Ofc</option>
                <option value="Appreciate">Appreciate</option>
              </select>
            </div>
            <div>
              <label className="labelMessages1">Subject*</label>
              <input className="inputMessages" type="text"></input>
            </div>
            <div>
              <label className="labelMessages2">Message*</label>
              <input className="inputMessages1" type="text"></input>
            </div>
            <div className="adminContainer">
              <button className="btnClass">Send Message</button>
              <button>Cancel</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <table className="tabClass">
        <tr className="rowClass">
          <th>Msg UID.</th>
          <th>Category</th>
          <th>Subject</th>
          <th>Sent to</th>
          <th>read/unread</th>
          <th>Sent By</th>
          <th>Delivered On</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Information</td>
          <td>Test message</td>
          <td>2108</td>
          <td>0 of 0</td>
          <td>null</td>
          <td>Thu 10 Dec 2021 03.080 pm</td>
        </tr>
      </table>








        </div>
    )
}
