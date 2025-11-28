import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { motion } from "motion/react";

const VehicleCard = (props) => {
  const { vehicle, index } = props;

  return (
    <Col as={motion.div} xl={3} lg={4} md={6} sm={12} className="mb-4">
      <Card>
        <Card.Body key={index}>
          <img
            src={vehicle.img}
            alt={vehicle.brand}
            className="object-fit-cover w-100"
          />
          <Card.Title className="mt-3">{vehicle.brand}</Card.Title>
          <div className="d-flex flex-row gap-5 align-items-center justify-content-between">
            <Card.Text className="mb-0">
              {vehicle.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </Card.Text>
            <Button variant="outline-primary">Book</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default VehicleCard;
