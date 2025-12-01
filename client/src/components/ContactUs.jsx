import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container d-flex flex-row  flex-grow-1 justify-content-center align-items-center w-50">
      <Form
        className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-3"
        onClick={handleSubmit}
      >
        <h1>ContactUs</h1>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="User Email"
            name="email"
            onChange={handleChange}
            value={contact.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            value={contact.phone}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" onChange={handleChange} />
        </Form.Group>
        <Button>Add Complained</Button>
      </Form>
    </div>
  );
};

export default ContactUs;
