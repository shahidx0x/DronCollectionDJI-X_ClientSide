import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCard = (props) => {
  const { ProductName, name, email, address, _id } = props.mcard;
  const notify = () => toast.success("Deleted Successfully ");
  const [status, setStatus] = useState(false);

  const updateStatus = () => {
    setStatus(true);
  };
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are You Sure You Want to Delete ?");
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
          <p>status : {status ? "shipped" : "pending"} </p>
          <p>{name}</p>
          <p>{email}</p>
          <Card.Text>{address}</Card.Text>
          <Button onClick={() => handleDelete(_id)} variant="primary">
            Delete Order
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              updateStatus();
            }}
            variant="secondary"
          >
            Confirm
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ManageCard;
