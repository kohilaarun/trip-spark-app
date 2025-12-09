import React from "react";
import VehicleList from "./VehicleList";
import {
  busData,
  carData,
  flightData,
  trainData,
} from "../constants/vehicles-array";
import { useParams } from "react-router-dom";

const VehiclePage = () => {
  const { type } = useParams();
  let vehicles = [];
  let title = "";

  if (type === "flight") {
    vehicles = flightData;
    title = "Flights";
  } else if (type === "train") {
    vehicles = trainData;
    title = " Trains";
  } else if (type === "car") {
    vehicles = carData;
    title = "Cars";
  } else if (type === "bus") {
    vehicles = busData;
    title = "Bus";
  }

  return <VehicleList vehicles={vehicles} title={title} />;
};

export default VehiclePage;
