import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { _id, name, price, des, img } = props.service;
  return (
    <div>
      <Card style={{ width: "20rem", height: "34rem", marginBottom: "15px" }}>
        <div style={{ width: "100%", height: "200px" }}>
          <Card.Img variant="top" src={img} />
        </div>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div style={{ width: "100%", height: "150px" }}>
            <Card.Text>{des}</Card.Text>
          </div>
          <div>
            <h1>${price}</h1>
          </div>
          <Link to={`/placeorder/${_id}`}>
            <Button variant="primary">Place Order</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
