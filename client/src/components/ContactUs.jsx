import React from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";

const initialState = { email: "", phone: "", massage: "" };
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [contact, setcontact] = useState(initialState);

  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };
  const sendFeedback = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, { contact });
      alert("feedback sent successful");
      setcontact(initialState);
    } catch (err) {
      console.log("error occurred", err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback();
  };
  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <p
        onClick={handleClick}
        variant="light"
        className="mb-0 contact-btn d-flex align-items-center gap-1"
      >
        <MdOutlineEmail />
        Contact Us
      </p>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-2 p-4 text-success contact-us">
            Contact Us
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form
            className="p-3 rounded mt-2 d-flex flex-column gap-3"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="User Email"
                name="email"
                onChange={handleChange}
                value={contact.email}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
                value={contact.phone}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="FeedBack"
                name="massage"
                onChange={handleChange}
                rows={5}
                required
              />
            </Form.Group>
            <Button type="submit" className="btn-success">
              Add Complaint
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContactUs;
