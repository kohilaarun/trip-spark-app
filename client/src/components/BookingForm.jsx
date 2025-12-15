import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import AlertToast from "./AlertToast";
import { TbRuler } from "react-icons/tb";

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
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BookingForm = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const [bookingDetails, setBookingDetails] = useState(initialState);
  const handleChange = (e) => {
    setBookingDetails((bookingDetails) => ({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    }));
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
    searchVechicles();
  };

  return (
    <>
      <Form
        className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-2  bg-light"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-success">Ticket Booking</h1>
        <Form.Group>
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={bookingDetails.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
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
          </Form.Group>

          <Form.Group as={Col}>
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
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Travel Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={bookingDetails.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
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
          <Form.Group as={Col}>
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={bookingDetails.price}
              onChange={handleChange}
              min={0}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
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
