import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Page from "./Page";

const BookingPage = () => {
  return (
    <Page>
      <Form className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-2">
        <h1>Ticket Booking</h1>
        <Form.Group>
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Departure</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Return</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Form.Group>
          <Form.Label>Passenger</Form.Label>
          <Form.Select>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>5 Adults</option>
          </Form.Select>
        </Form.Group>
        <Button>Search</Button>
      </Form>
    </Page>
  );
};

export default BookingPage;
