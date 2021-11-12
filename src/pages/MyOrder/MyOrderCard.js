import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyOrderCard = (props) => {
  const notify = () => toast.success("Deleted Successfully ");
  const { _id, ProductName, name, email, address } = props.data;
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are you sure , you want to delete ?");
    if (isDelete) {
      fetch(`https://dronsite.herokuapp.com/placeorder/${id}`, {
        method: "DELETE",
      });
      notify();
    }
  };
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ToastContainer />
      <Card>
        <Card.Body>
          <h3>{ProductName}</h3>
          <p>{name}</p>
          <p>{email}</p>
          <Card.Text>{address}</Card.Text>
          <Button onClick={() => handleDelete(_id)} variant="primary">
            Delete Order
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyOrderCard;
