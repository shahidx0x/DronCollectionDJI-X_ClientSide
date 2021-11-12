import React from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.put("https://dronsite.herokuapp.com/users/admin", data);
  };
  return (
    <Container style={{ marginTop: "100px", height: "40vh" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>
            <span>Make An Admin</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ width: "100%" }}
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <input style={{ width: "100%" }} type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
