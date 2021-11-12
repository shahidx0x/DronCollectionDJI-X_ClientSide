import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

const MaCard = (props) => {
  const { _id, name, img, rev } = props.review;
  const history = useHistory();

  const notify = () => toast.success("Deleted Successfully ");
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are You Sure You Want to Delete ?");
    if (isDelete) {
      fetch(`https://dronsite.herokuapp.com/reviews/${id}`, {
        method: "DELETE",
      });
      notify();
    }
    setTimeout(() => {
      history.push("/home");
    }, 1000);
  };
  return (
    <Container>
      <ToastContainer />
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
                <p>{rev}</p>
                <Button onClick={() => handleDelete(_id)} variant="primary">
                  Delete Review
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};
export default MaCard;
