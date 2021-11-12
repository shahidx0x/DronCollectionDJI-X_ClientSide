import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ManageCard from "./ManageCard";
import "./ManageAllOrfer.css";

const ManageAllOrfer = () => {
  const [allorder, setAllorder] = useState([]);
  useEffect(() => {
    fetch("https://dronsite.herokuapp.com/placeorder")
      .then((res) => res.json())
      .then((data) => setAllorder(data));
  });
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center">
        <span>Manage All Order</span>
      </h2>
      <div className="grid-container-order">
        {allorder.map((order) => (
          <ManageCard key={order._id} mcard={order}></ManageCard>
        ))}
      </div>
    </Container>
  );
};

export default ManageAllOrfer;
