import React from "react";
import HomeCarousel from "./HomeCarousel";
import VehicleList from "./VehicleList";
import { busData, flightData } from "../constants/vehicles-array";

const vehicles = [...flightData, ...busData];

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default HomePage;
