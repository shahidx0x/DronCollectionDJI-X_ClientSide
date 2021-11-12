import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} className="bgimg">
            <Container>
              <Row>
                <Col
                  md={{ span: 6, offset: 1 }}
                  className="header-con"
                  style={{ color: "" }}
                >
                  <div className="ldiv">
                    <h1 style={{ fontSize: "40px", marginTop: "50px" }}>
                      <span>DJI-X</span> technology empowers us to see the
                      future of possible.
                    </h1>
                    <br />
                    <p>We are specializes in Dron Technology.</p>
                    <Link to="/packages">
                      <Button
                        className=""
                        variant="outline-warning "
                        style={{ width: "200px" }}
                      >
                        Our Products
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
