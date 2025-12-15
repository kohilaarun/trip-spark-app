import React from "react";
import { Accordion } from "react-bootstrap";
import Page from "./Page";

const AccordionBar = () => {
  return (
    <Page>
      <div className="border border-1 p-3 shadow rounded w-50 mt-5 d-flex flex-column gap-2  bg-light">
        <h2 className="mb-4 text-center text-success">FAQ Question</h2>
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="one">
            <Accordion.Header className="text-center">
              What is this travel booking app used for?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3  ">
              This app allows you to search, compare, and book flights, trains,
              buses, and rental cars in one place.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="text-center">
              What documents are required for air travel?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3  ">
              Government-issued ID such as Aadhaar, PAN, Passport, Driving
              License is required.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="text-center">
              What if my train ticket is waitlisted?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3  ">
              Your ticket status will automatically update. Refund is initiated
              if the ticket is not confirmed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="text-center">
              Are bus tickets refundable?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3  ">
              Refund depends on the bus operator’s cancellation policy. The app
              will show this before booking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="text-center">
              How long do refunds take?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3 ">
              Usually 3–7 working days, depending on the payment method.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="text-center">
              How do I download or share my ticket?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3 ">
              Open your booking → tap Download Ticket or Share Ticket.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="text-center">
              How do I contact customer support?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3 ">
              Use Help & Support in the app or email/contact number shown under
              Contact Us.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="text-center">
              How do I report a problem?
            </Accordion.Header>
            <Accordion.Body className="bg-white p-3 ">
              Go to Help → Report Issue → choose the booking → enter details →
              submit.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Page>
  );
};

export default AccordionBar;
