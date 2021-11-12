import React from "react";
import { Card } from "react-bootstrap";

const ReviewCard = (props) => {
  const { img, rev, name } = props.review;
  return (
    <div>
      <Card style={{ width: "20rem", height: "30rem", marginBottom: "15px" }}>
        <Card.Img variant="top" src={img} style={{ borderRadius: "50%" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{rev}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
