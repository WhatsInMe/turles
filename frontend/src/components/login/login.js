import React from "react";
import { useNavigate } from "react-router";

import "./login.css";
import { Button, Form } from "react-bootstrap";
import { login } from "../../utility/login";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center mx-auto login">
      <Form className="d-flex flex-column login__form p-2">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            //
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            //
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="mb-3"
          variant="primary"
          onClick={async (e) => {
            // e.preventDefault();
            await login(username, password);
            window.location.reload(true);
          }}
        >
          Login
        </Button>

        <Button
          //
          className="mb-3"
          variant="secondary"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}
