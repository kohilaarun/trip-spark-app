import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { motion } from "motion/react";

const styles = {
  img: { aspectRatio: "16/12" },
};

const VehicleCard = (props) => {
  const { vehicle, index } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <Col xl={3} lg={4} md={6} sm={12} className="mb-4 h-100 ">
      <Card className="cards-col">
        <Card.Body key={index}>
          <img
            src={vehicle.img}
            alt={vehicle.brand}
            className="object-fit-cover w-100"
            style={styles.img}
          />
          <Card.Title className="mt-3">{vehicle.brand}</Card.Title>
          <div className="d-flex flex-row gap-5 align-items-center justify-content-between">
            <Card.Text className="mb-0">
              <Badge>
                {vehicle.price.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </Badge>
            </Card.Text>
            <Button
              variant="outline-primary"
              className="book-btn"
              onClick={handleClick}
            >
              Book
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default VehicleCard;
