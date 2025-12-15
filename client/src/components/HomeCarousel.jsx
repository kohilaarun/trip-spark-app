import React from "react";
import { Badge, Carousel } from "react-bootstrap";
import { carData, trainData } from "../utils/vehicles-array";

const styles = {
  img: { maxHeight: "80vh", aspectRatio: "16/9" },
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
          <Carousel.Caption className="d-flex flex-column rounded align-items-center">
            <h3 className="fs-1 carousal-caption ">{vehicle.brand}</h3>
            <p className="fs-3">
              <Badge>
                {vehicle.price.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </Badge>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default HomeCarousel;
