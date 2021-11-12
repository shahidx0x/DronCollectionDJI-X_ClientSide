import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit } = useForm("");
  const { registerUser, SetUser, auth, updateProfile } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const genRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://dronsite.herokuapp.com/users", user);
  };
  const onSubmit = (data) => {
    console.log(data);
    const pass = data.Password;
    const pass2 = data.Password2;
    const email = data.email;
    const name = data.name;
    const img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    console.log(img_url);
    if (pass !== pass2) {
      alert("Password Not Matched");
      return;
    }
    registerUser(name, email, pass)
      .then((userCredential) => {
        const updatedUser = { email, displayName: name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img_url,
        }).then(() => {
          localStorage.setItem("isAuth", "true");
          saveUser(email, name);
          history.push(location.state?.from || "/home");
        });
      })
      .catch((error) => {});
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <h2> Please Register </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="First name"
                {...register("name", { required: true, maxLength: 80 })}
              />
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
              <input
                style={{ width: "100%" }}
                type="password"
                placeholder="Confirm Password"
                {...register("Password2", {})}
              />
              <Link to="/login">Already Registerd ? Login here</Link>
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
                Register
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
