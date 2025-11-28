import React from "react";
import { Button, Form } from "react-bootstrap";

const CreateAccountPage = () => {
  return (
    <div className="container d-flex flex-row  flex-grow-1 justify-content-center align-items-center">
      <Form className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-3">
        <h2 className="text-center">Create Account</h2>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="User Name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="mail"
            placeholder="Email"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            name="address"
            placeholder="Address"
          ></Form.Control>
        </Form.Group>
        <Button>Create Account</Button>
      </Form>
    </div>
  );
};

export default CreateAccountPage;
