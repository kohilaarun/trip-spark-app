import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Page from "./Page";

const CreateAccountPage = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const handleChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Page>
      <Form
        className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-3"
        onClick={handleSubmit}
      >
        <h2 className="text-center text-primary">Create Account</h2>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="User Name"
            value={accountDetails.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={accountDetails.email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={accountDetails.password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            value={accountDetails.address}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Button>Create Account</Button>
        <p className="text-center">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </Form>
    </Page>
  );
};

export default CreateAccountPage;
