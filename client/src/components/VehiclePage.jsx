import React from "react";
import VehicleList from "./VehicleList";
import {
  busData,
  carData,
  flightData,
  trainData,
} from "../utils/vehicles-array";
import { useParams } from "react-router-dom";
import Page from "./Page";

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

  return (
    <Page>
      <VehicleList vehicles={vehicles} title={title} />
    </Page>
  );
};

export default VehiclePage;
