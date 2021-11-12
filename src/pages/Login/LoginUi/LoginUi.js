import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import LineIcon from "react-lineicons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginUi = () => {
  const { register, handleSubmit } = useForm();
  const { signInGoogle, login } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.put("https://dronsite.herokuapp.com/users", user);
  };
  const onSubmit = (data) => {
    login(data.email, data.Password).then((res) => {
      localStorage.setItem("isAuth", "true");
      history.push(location.state?.from || "/home");
    });
    history.push(location.state?.from || "/home");
  };
  const handleGoogleLogin = () => {
    signInGoogle().then((res) => {
      const usr = res.user;
      saveUser(usr.email, usr.displayName);
      localStorage.setItem("isAuth", "true");
      history.push(location.state?.from || "/home");
    });
  };
  return (
    <Container style={{ marginTop: "100px", height: "60vh" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <h2> Please Login </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ width: "100%" }}
                type="email"
                placeholder="Email"
                {...register("email", { required: true, maxLength: 80 })}
              />
              <input
                style={{ width: "100%" }}
                type="password"
                placeholder="Password"
                {...register("Password", {})}
              />

              <Link to="/register">No account ? Register here</Link>

              <Button
                type="submit"
                style={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
                variant="secondary"
              >
                Login
              </Button>
            </form>
          </div>
          <Button
            style={{ width: "100%", marginBottom: "20px" }}
            onClick={handleGoogleLogin}
            variant="secondary"
          >
            <LineIcon style={{ fontSize: "20px" }} name="google" />
            Sign In Using Google
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUi;
