import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import MyOrderCard from "./MyOrderCard";

const MyOrder = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://dronsite.herokuapp.com/placeorder")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.email === user.email));
      });
  }, [morder, user.email]);
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="text-center">
        <span>My Orders</span>
      </h2>
      {filteredData.map((fdata) => (
        <MyOrderCard key={fdata._id} data={fdata}></MyOrderCard>
      ))}
    </Container>
  );
};

export default MyOrder;
