import React from "react";
import { Form, Row, Col, Button} from "react-bootstrap";
import "./register.css" 
export default function Register(props) {
  return (
    <div className="d-flex flex-column justify-content-center mx-auto register">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name"></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>


      </Form>
    </div>
  );
}
