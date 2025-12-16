import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Page from "./Page";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../contexts/authContext";
import { validateEmail, validateName } from "../utils/validate-functions";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
};

const initialTouched = {
  name: false,
  email: false,
  password: false,
  address: false,
};
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);
  const [accountDetails, setAccountDetails] = useState(initialState);
  const [touched, setTouched] = useState(initialTouched);

  const nameError = validateName(accountDetails.name);
  const emailError = validateEmail(accountDetails.email);
  const isFormValid = !nameError && !emailError;

  const handleChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const signupRequest = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, {
        accountDetails,
      });
      alert("Successful");
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log("error occurred", err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (isFormValid) {
      signupRequest();
    }
  };
  return (
    <Page>
      <Form
        className="border border-1 p-3 shadow rounded  mt-5 d-flex flex-column gap-3  bg-light col-12 col-md-10 col-lg-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-success">Create Account</h2>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="User Name"
            value={accountDetails.name}
            onChange={handleChange}
          ></Form.Control>
          {touched.name && <p className="text-danger">{nameError}</p>}
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
          {touched.email && <p className="text-danger">{emailError}</p>}
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
        <Button type="submit" className="btn-success">
          Create Account
        </Button>
        <p className="text-center">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </Form>
    </Page>
  );
};

export default CreateAccountPage;
