import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <Container>
      <p className="text-center" style={{ color: "orange", fontSize: "30px" }}>
        Choose Your Product
      </p>
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        Select Your Product Best for yourself
      </h2>
      <div className="grid-container text-center mt-5">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </Container>
  );
};

export default Services;
