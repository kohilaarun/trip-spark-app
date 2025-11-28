import React, { useMemo, useState } from "react";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";
import VehicleCard from "./VehicleCard";

const VehicleList = ({ vehicles }) => {
  const [search, setSearch] = useState("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const brand = vehicle.brand.toLowerCase();
      const searchStr = search.toLowerCase();
      return brand.includes(searchStr);
    });
  }, [vehicles, search]);

  return (
    <div className=" container mt-5">
      <div className="row justify-content-end">
        <div className="col-12 col-sm-6 col-lg-4">
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search by name..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={(e) => e.target.scrollIntoView()}
            />
            <Button className="btn btn-dark border border-dark-subtle">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
      </div>
      <Row className="mt-3" as={motion.div}>
        {filteredVehicles.map((vehicle, index) => (
          <VehicleCard vehicle={vehicle} index={index} />
        ))}
      </Row>
    </div>
  );
};

export default VehicleList;
