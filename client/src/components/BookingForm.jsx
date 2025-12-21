import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import AlertToast from "./AlertToast";
import { TbRuler } from "react-icons/tb";
import {
  validateAddress,
  validateName,
  validateRequired,
} from "../utils/validate-functions";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  address: "",
  boarding: "",
  destination: "",
  date: "",
  type: "",
  passenger: "",
  price: "",
  payment: "",
};
const initialTouched = {
  name: false,
  address: false,
  boarding: false,
  destination: false,
  date: false,
  type: false,
  passenger: false,
  price: false,
  payment: false,
};
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BookingForm = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(initialState);
  const [touched, setTouched] = useState(initialTouched);

  const nameError = validateName(bookingDetails.name);
  const addressError = validateAddress(bookingDetails.address);
  const boardingPointError = validateRequired(
    bookingDetails.destination,
    "Destination Point",
  );
  const destinationError = validateRequired(
    bookingDetails.destination,
    "Destination Point",
  );
  const isFormValid =
    !nameError && !addressError && !boardingPointError && !destinationError;

  const handleChange = (e) => {
    setBookingDetails((bookingDetails) => ({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    }));
    setTouched({ ...touched, [e.target.name]: true });
  };

  const searchVechicles = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/booking`, { bookingDetails });
      setBookingDetails(initialState);
      setShow(true);
    } catch (err) {
      console.log("error occurred", err);
      setShowError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      address: true,
      boarding: true,
      destination: true,
      date: true,
      type: true,
      passenger: true,
      price: true,
      payment: true,
    });
    if (!isFormValid) return;
    searchVechicles();
  };

  return (
    <>
      <Form
        className="border border-1 p-3 shadow rounded d-flex flex-column gap-2  bg-light col-12 col-md-10 col-lg-6"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-row align-items-center justify-content-center">
          <Button variant="success" as={Link} to={-1}>
            <FaArrowLeft />
          </Button>
          <h1 className="text-center text-success flex-grow-1">
            Ticket Booking
          </h1>
        </div>
        <Form.Group>
          <Form.Label htmlFor="name">Customer Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={bookingDetails.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Boarding point</Form.Label>
            <Form.Select
              name="boarding"
              value={bookingDetails.boarding}
              onChange={handleChange}
            >
              <option value="">Select Boarding Point</option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore"> Coimbatore</option>
              <option value="tirunelveli">Tirunelveli</option>
              <option value="tenkasi"> Tenkasi</option>
              <option value="bangalore"> Bangalore</option>
              <option value="mumbai"> Mumbai</option>
              <option value="delhi"> Delhi</option>
              <option value="hyderabad"> Hyderabad</option>
            </Form.Select>
            {touched.boarding && (
              <p className="text-danger">{boardingPointError}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Destination point</Form.Label>
            <Form.Select
              name="destination"
              value={bookingDetails.destination}
              onChange={handleChange}
            >
              <option value="">Select Destination Point</option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore"> Coimbatore</option>
              <option value="tirunelveli">Tirunelveli</option>
              <option value="tenkasi"> Tenkasi</option>
              <option value="bangalore"> Bangalore</option>
              <option value="mumbai"> Mumbai</option>
              <option value="delhi"> Delhi</option>
              <option value="hyderabad"> Hyderabad</option>
            </Form.Select>
            {touched.destination && (
              <p className="text-danger">{destinationError}</p>
            )}
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Travel Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={bookingDetails.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Travel Type</Form.Label>
            <Form.Select
              name="type"
              value={bookingDetails.type}
              onChange={handleChange}
            >
              <option value="flight">Flight</option>
              <option value="car"> Car</option>
              <option value="train">Train</option>
              <option value="flibusght"> Bus</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group>
          <Form.Label>Passenger</Form.Label>
          <Form.Select
            name="passenger"
            value={bookingDetails.passenger}
            onChange={handleChange}
          >
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={bookingDetails.price}
              onChange={handleChange}
              min={0}
            />
          </Form.Group>

          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Payment Mode</Form.Label>
            <Form.Select
              name="payment"
              value={bookingDetails.payment}
              onChange={handleChange}
            >
              <option value="upi"> Pay UPI</option>
              <option value="netBanking">Net Banking</option>
              <option value="creditCard">Credit Card</option>
              <option value="giftCard"> Gift Card</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="mt-3 btn-success" type="submit">
          Book
        </Button>
      </Form>

      <AlertToast show={show} setShow={setShow} variant="success">
        Booking Successful!
      </AlertToast>
      <AlertToast show={showError} setShow={setShowError} variant="danger">
        Something went wrong!
      </AlertToast>
    </>
  );
};

export default BookingForm;
