import React from "react";
import { Card } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import Page from "./Page";
import { Link } from "react-router-dom";

const MyBookings = () => {
  return (
    <Page>
      <div className="row g-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <Card className="h-100 btn btn-light" as={Link} to="/booking">
            <Card.Body className="d-flex flex-column  align-items-center justify-content-center">
              <IoAddSharp size={72} />
              <Card.Title>New Booking</Card.Title>
            </Card.Body>
          </Card>
        </div>
        {bookings.map((booking, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <Card className="h-100">
              <Card.Body>
                <Card.Title key={index}>
                  {booking.boarding}
                  <FaLongArrowAltRight /> {booking.destination}
                </Card.Title>
                <Card.Text>{booking.date}</Card.Text>
                <Card.Text>{booking.type}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default MyBookings;

const bookings = [
  {
    _id: {
      $oid: "693c146aabfcf1531fde6465",
    },
    name: "Kohila A",
    address: "2/122, Thoranamalai Road, Asirvathapuram",
    boarding: "tenkasi",
    destination: "coimbatore",
    date: "2025-12-12",
    type: "",
    passenger: "2",
    price: "400",
    payment: "",
    __v: 0,
  },

  {
    _id: {
      $oid: "693cdc4428f522234470dda7",
    },
    name: "Arun Prabhu K",
    address: "2/122, Thoranamalai Road, Asirvathapuram",
    boarding: "tirunelveli",
    destination: "delhi",
    date: "2025-12-31",
    type: "train",
    passenger: "2",
    price: "689",
    payment: "netBanking",
    __v: 0,
  },
  {
    _id: {
      $oid: "693cdc4d28f522234470dda9",
    },
    name: "Niami Kuling",
    address: "Australia",
    boarding: "tenkasi",
    destination: "bangalore",
    date: "2025-12-26",
    type: "flight",
    passenger: "3",
    price: "2000",
    payment: "upi",
    __v: 0,
  },

  {
    _id: {
      $oid: "694591da16c27e1db0701fbd",
    },
    name: "Ayron Jones",
    address: "THORANAMALAI ROAD",
    boarding: "mumbai",
    destination: "tirunelveli",
    date: "2025-12-30",
    type: "car",
    passenger: "",
    price: "456",
    payment: "",
    __v: 0,
  },
  {
    _id: {
      $oid: "693d67dbcff95e5ba7349fa0",
    },
    name: "Kohila Arun",
    address: "2/122, Thoranamalai Road, Asirvathapuram",
    boarding: "tirunelveli",
    destination: "tirunelveli",
    date: "2025-12-16",
    type: "flight",
    passenger: "2",
    price: "1000",
    payment: "",
    __v: 0,
  },
];
