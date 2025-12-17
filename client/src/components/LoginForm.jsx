import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Page from "./Page";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../contexts/authContext";
import {
  validateEmail,
  validateLogInPasswod,
} from "../utils/validate-functions";

const initialState = {
  email: "",
  password: "",
};

const initialTouched = {
  email: false,
  password: false,
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);
  const [touched, setTouched] = useState(initialTouched);

  const { setIsLoggedIn } = useContext(authContext);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };
  const emailErr = validateEmail(details.email);
  const passwordErr = validateLogInPasswod(details.password);

  const isFormValid = !emailErr && !passwordErr;

  const loginRequest = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/login`, { details });
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log("error occured", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isFormValid) return;
    loginRequest();
  };
  return (
    <Page>
      <Form
        className="border border-1 p-3 shadow rounded d-flex flex-column gap-3 bg-light col-12 col-md-10 col-lg-8 col-xl-6 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-success">Sign In</h2>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="user@gmail.com"
            onChange={handleChange}
            value={details.email}
          />
          {touched.email && <p className="text-danger">{emailErr}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="....."
            onChange={handleChange}
            value={details.password}
          />
          {touched.password && <p className="text-danger">{passwordErr}</p>}
        </Form.Group>
        <Button type="submit" className="btn-success">
          Sign In
        </Button>
        <p className="text-center">
          Don't have an account? <Link to="/create-account">Sign Up</Link>
        </p>
      </Form>
    </Page>
  );
};

export default LoginForm;
