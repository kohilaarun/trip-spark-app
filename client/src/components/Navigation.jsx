import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineFlight } from "react-icons/md";

import { TbBus } from "react-icons/tb";
import { FaQq, FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import axios from "axios";
import { authContext } from "../contexts/authContext";
import { useContext } from "react";
import { GiRocketFlight } from "react-icons/gi";

const Navigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);

  const logout = async () => {
    try {
      await axios.get("http://localhost:4000/api/auth/logout");
      setIsLoggedIn(false);
      navigate("/sign-in");
    } catch (err) {
      console.log("error occurred", err);
    }
  };

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <Navbar
        className=" fs-4"
        data-bs-theme="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"} className=" brand-name">
              <GiRocketFlight style={styles.rocket} />
              <span style={styles.brandFirstLetter}>T</span>ripSpark
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse className="justify-content-end " id="navbar-toggle">
            <Nav className="flex-wrap gap-2">
              {isLoggedIn ? (
                <>
                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/vehicles/flight"}
                  >
                    <MdOutlineFlight />
                    Flight
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/vehicles/train"}
                  >
                    <FaTrainSubway /> Train
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/vehicles/bus"}
                  >
                    <TbBus />
                    Bus
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/vehicles/car"}
                  >
                    <FaCarSide /> Car
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/my-booking"}
                  >
                    My Booking
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/faq"}
                  >
                    <FaQq /> FAQ
                  </Nav.Link>
                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    onClick={handleClick}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/create-account"}
                  >
                    Create Account
                  </Nav.Link>

                  <Nav.Link
                    className="d-flex align-items-center gap-1"
                    as={Link}
                    to={"/sign-in"}
                  >
                    Sign In
                  </Nav.Link>
                </>
              )}

              <Nav.Link as={"div"} className="d-flex align-items-center gap-1">
                <ContactUs />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Navigation;

const styles = {
  brandFirstLetter: { marginRight: "5px" },
  rocket: { marginTop: "-12px" },
};
