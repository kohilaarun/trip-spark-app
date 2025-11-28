import React from "react";
import VehicleList from "./VehicleList";
import { flightData } from "../constants/vehicles-array";

const VehiclePage = () => {
  return (
    <div>
      <VehicleList vehicles={flightData} />
    </div>
  );
};

export default VehiclePage;
