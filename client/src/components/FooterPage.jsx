import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaCarSide,
  FaFacebook,
  FaQq,
  FaSquareInstagram,
  FaTrainSubway,
  FaTwitter,
} from "react-icons/fa6";
import { LuBookImage } from "react-icons/lu";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineFlight } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const FooterPage = () => {
  return (
    <footer className="bg-black bg-gradient text-danger d-flex flex-column justify-content-center p-3">
      <div className="d-flex flex-row justify-content-around w-100">
        <div className="d-flex flex-column justify-content-center">
          <Nav className="flex-column">
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/vehicles/flight"}
            >
              <MdOutlineFlight />
              Flights
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/vehicles/train"}
            >
              <FaTrainSubway /> Trains
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/vehicles/bus"}
            >
              <TbBus /> Buses
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/vehicles/car"}
            >
              <FaCarSide /> Cars
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav className="flex-column">
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/booking"}
            >
              <LuBookImage /> Booking
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex align-items-center gap-1"
              as={Link}
              to={"/faq"}
            >
              <FaQq />
              FAQ
            </Nav.Link>
            <Nav.Link className="fs-5 p-1 footer d-flex align-items-center gap-1">
              <ContactUs />
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav className="flex-column">
            <Nav.Link
              className="fs-5 p-1 footer d-flex gap-1"
              href="https://www.instagram.com"
            >
              <FaSquareInstagram size={32} />
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex gap-1"
              href="https://www.facebook.com"
            >
              <FaFacebook size={32} />
            </Nav.Link>
            <Nav.Link
              className="fs-5 p-1 footer d-flex gap-1"
              href="https://x.com"
            >
              <FaTwitter size={32} />
            </Nav.Link>
          </Nav>
        </div>
      </div>
      <p className="mb-0 text-center text-white">
        © 2026 Trip-Spark. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterPage;
