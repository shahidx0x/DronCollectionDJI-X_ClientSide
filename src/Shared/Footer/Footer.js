import React from "react";
import "./Footer.css";
import { Col, Container, Form, Row, Button, Nav } from "react-bootstrap";
import LineIcon from "react-lineicons";

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg bg-dark">
        <Row>
          <Col className="">
            <Container fluid>
              <Row style={{ color: "gray" }}>
                <Col xs={12} lg={6}>
                  <div className="text-center mt-3">
                    <img src="/logo.png" alt="" />
                    <Nav className="footer-nav">
                      <Nav.Link href="#features">Home</Nav.Link>
                      <Nav.Link href="#pricing">Packages</Nav.Link>
                      <Nav.Link href="#deets">About</Nav.Link>
                      <Nav.Link href="#deetss">Contact</Nav.Link>
                    </Nav>
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <p className="mt-3">
                    we are specialize in dron technology. we are very happy to
                    give you the service.
                  </p>
                  <hr className="bg-danger border-2 border-top border-danger"></hr>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                  <Button variant="outline-secondary">Submit</Button>
                </Col>
                <Col xs={12}>
                  <p
                    className="text-center mt-5 copyr"
                    style={{ fontSize: "20px" }}
                  >
                    &copy; 2021 copyright DJI-X
                  </p>
                  <p className="text-center">
                    <LineIcon
                      style={{ fontSize: "50px", marginRight: "10px" }}
                      name="facebook"
                    />
                    <LineIcon
                      style={{ fontSize: "50px", marginRight: "10px" }}
                      name="youtube"
                    />
                    <LineIcon
                      style={{ fontSize: "50px", marginRight: "10px" }}
                      name="twitter"
                    />
                    <LineIcon
                      style={{ fontSize: "50px", marginRight: "10px" }}
                      name="wechat"
                    />
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
