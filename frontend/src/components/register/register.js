import React from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";

import "./register.css";

export default function Register(props) {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();

  async function handleSubmit(event) {
    event.preventDefault();
    
    const res = await axios.post("/register", {
      username,
      password,
      firstName,
      lastName,
      email,
    });

    console.log(res);
  }

  return (
    <div className="d-flex flex-column justify-content-center mx-auto register">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
                console.log(firstName);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              //
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
                console.log(lastName);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
        </Form.Group>

        <Button
          //
          type="submit"
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
