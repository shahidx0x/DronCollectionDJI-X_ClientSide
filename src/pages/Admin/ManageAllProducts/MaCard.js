import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

const MaCard = (props) => {
  const { _id, name, price, des, img } = props.product;
  const history = useHistory();

  const notify = () => toast.success("Deleted Successfully ");
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are You Sure You Want to Delete ?");
    if (isDelete) {
      fetch(`https://dronsite.herokuapp.com/products/${id}`, {
        method: "DELETE",
      });
      notify();
    }
    setTimeout(() => {
      history.push("/packages");
    }, 1000);
  };
  return (
    <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
      <ToastContainer />
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

              <Button onClick={() => handleDelete(_id)} variant="primary">
                Delete Product
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default MaCard;
