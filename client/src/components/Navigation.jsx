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
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>
              <Routes>
                <Route path="/flight" element={"Flight-Spark"} />
                <Route path="/" element={"Trip-Spark"} />
                <Route path="/car" element={"Car-Spark"} />
                <Route path="/train" element={"Train-Spark"} />
                <Route path="/bus" element={"Bus-Spark"} />
                <Route path="/faq" element={"FAQ-Ques"} />
                <Route path="/booking" element={"Booking-Page"} />
              </Routes>
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              className="d-flex align-items-center gap-2"
              as={Link}
              to={"/flight"}
            >
              <MdOutlineFlight />
              Flight
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="d-flex align-items-center gap-2"
              as={Link}
              to={"/train"}
            >
              <FaTrainSubway /> Train
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="d-flex align-items-center gap-2"
              as={Link}
              to={"/bus"}
            >
              <TbBus />
              Bus
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="d-flex align-items-center gap-2"
              as={Link}
              to={"/car"}
            >
              <FaCarSide /> Car
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/booking"}>
              Booking
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/faq"}>
              FAQ
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/create-account"}>
              Create Accout
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/sign-in"}>
              Sign In
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/contact-us"}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
