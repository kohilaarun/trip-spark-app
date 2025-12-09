import React from "react";
import HomeCarousel from "./HomeCarousel";
import VehicleList from "./VehicleList";
import { busData, flightData } from "../constants/vehicles-array";
import Page from "./Page";

const vehicles = [...flightData, ...busData];

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <Page>
        <VehicleList vehicles={vehicles} />
      </Page>
    </div>
  );
};

export default HomePage;
