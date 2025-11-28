import React from "react";
import { Carousel } from "react-bootstrap";
import { carData, trainData } from "../constants/vehicles-array";

const styles = {
  img: { height: "80vh" },
};

const vehicles = [...trainData, ...carData];

const HomeCarousel = () => {
  return (
    <Carousel className="flex-grow-1">
      {vehicles.map((vehicle, index) => (
        <Carousel.Item key={index}>
          <img
            src={vehicle.img}
            alt={vehicle.brand}
            style={styles.img}
            className="object-fit-cover w-100"
          />
          <Carousel.Caption>
            <h3>{vehicle.brand}</h3>
            <p>
              {vehicle.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default HomeCarousel;
