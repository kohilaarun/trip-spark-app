import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineFlight } from "react-icons/md";

import { TbBus } from "react-icons/tb";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { Link, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar
        bg="primary fs-4"
        data-bs-theme="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"} className="fs-1">
              <Routes>
                <Route path="/flight" element={"Flight-Spark"} />
                <Route path="*" element={"Trip-Spark"} />
              </Routes>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse className="justify-content-end " id="navbar-toggle">
            <Nav className="flex-wrap">
              <Nav.Link
                className="d-flex align-items-center gap-2"
                as={Link}
                to={"/vehicles/flight"}
              >
                <MdOutlineFlight />
                Flight
              </Nav.Link>

              <Nav.Link
                className="d-flex align-items-center gap-2"
                as={Link}
                to={"/vehicles/train"}
              >
                <FaTrainSubway /> Train
              </Nav.Link>

              <Nav.Link
                className="d-flex align-items-center gap-2"
                as={Link}
                to={"/vehicles/bus"}
              >
                <TbBus />
                Bus
              </Nav.Link>

              <Nav.Link
                className="d-flex align-items-center gap-2"
                as={Link}
                to={"/vehicles/car"}
              >
                <FaCarSide /> Car
              </Nav.Link>

              <Nav.Link as={Link} to={"/booking"}>
                Booking
              </Nav.Link>

              <Nav.Link as={Link} to={"/faq"}>
                FAQ
              </Nav.Link>

              <Nav.Link as={Link} to={"/create-account"}>
                Create Account
              </Nav.Link>

              <Nav.Link as={Link} to={"/sign-in"}>
                Sign In
              </Nav.Link>

              <Nav.Link as={Link} to={"/contact-us"}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
