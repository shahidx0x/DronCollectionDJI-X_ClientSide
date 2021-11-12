import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllServiceCard = (props) => {
  const { _id, name, price, des, img } = props.data;
  return (
    <Container>
      <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Card>
          <Card.Body>
            <div className="d-flex">
              <div>
                <img
                  className="img-fluid"
                  src={img}
                  alt=""
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="ms-5">
                <h2>{name}</h2>
                <p>{des}</p>
                <p>
                  <span>${price}</span> Only
                </p>
                <Link to={`/placeorder/${_id}`}>
                  <Button variant="primary">Add to Order list</Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default AllServiceCard;
