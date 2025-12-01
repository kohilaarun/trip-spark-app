import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container d-flex flex-row  flex-grow-1 justify-content-center align-items-center">
      <Form
        className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-3"
        onClick={handleSubmit}
      >
        <h2 className="text-center text-primary">Sign In</h2>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="user@gmail.com"
            onChange={handleChange}
            value={details.email}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="....."
            onChange={handleChange}
            value={details.password}
          ></Form.Control>
        </Form.Group>
        <Button>Sign In</Button>
        <p className="text-center">
          Don't have an account? <Link to="/create-account">Sign Up</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
