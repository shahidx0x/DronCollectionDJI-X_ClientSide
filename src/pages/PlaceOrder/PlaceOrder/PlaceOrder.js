import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "./PlaceOrder.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { pakId } = useParams();
  const history = useHistory();
  const [orders, setOrder] = useState({});
  const [status, setStatus] = useState(false);
  const { register, handleSubmit } = useForm();
  const notify = () => toast.success("Submitted Successfully ");

  const onSubmit = (data) => {
    data.ProductName = orders.name;
    data.name = user.displayName;
    data.email = user.email;
    const ProductName = data.ProductName;
    const name = data.name;
    const email = data.email;
    const address = data.address;
    axios({
      method: "post",
      url: "https://dronsite.herokuapp.com/placeorder",
      data: {
        ProductName: ProductName,
        name: name,
        email: email,
        address: address,
      },
    });
    notify();
    setStatus(true);
    setTimeout(() => {
      history.push("/myorder");
    }, 1000);
  };
  const serverUrl = `https://dronsite.herokuapp.com/products/${pakId}`;
  useEffect(() => {
    fetch(serverUrl)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  });
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <ToastContainer />
        <Row className="gap-2" style={{ marginBottom: "100px" }}>
          <h2 className="text-center mb-5 " style={{ fontSize: "40px" }}>
            <span>
              Place Order
              <br />
              Enjoy your new Dron with great joy
            </span>
          </h2>
          <Col
            sm={7}
            className="text-center"
            style={{ border: "2px solid lightgray" }}
          >
            <img className="img-fluid mt-3" src={orders.img} alt="" />
            <h2>{orders.name}</h2>
            <p>{orders.des}</p>
            <div>
              <p>
                $<span>{orders.price}</span>
              </p>
            </div>
          </Col>
          <Col
            sm={4}
            style={{
              border: "2px solid lightgray",
              height: "",
            }}
          >
            <div className="mt-3">
              <p
                style={{
                  border: "1px solid gray",
                  padding: "5px",
                  width: "320px",
                  borderRadius: "10px",
                }}
              >
                order id : {orders._id}
              </p>
              <p
                style={{
                  border: "1px solid gray",
                  padding: "5px",
                  width: "150px",
                  borderRadius: "10px",
                }}
              >
                status : {status ? "confirmd" : "pending"}
              </p>
            </div>
            <div style={{ marginTop: "90px" }}>
              <p className="text-center fw-bold">Place Order</p>
              <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="ProductName"
                  defaultValue={orders.name}
                  {...register("ProductName")}
                />
                <input
                  placeholder="Name"
                  defaultValue={user.displayName}
                  {...register("name")}
                />
                <input
                  placeholder="Email"
                  defaultValue={user.email}
                  {...register("email")}
                />
                <input
                  placeholder="Address"
                  {...register("address", { required: "true" })}
                />
                <br />
                <input type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
