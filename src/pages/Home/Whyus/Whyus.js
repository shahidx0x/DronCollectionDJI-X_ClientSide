import React from "react";
import { Container } from "react-bootstrap";
import "./Whyus.css";

const Whyus = () => {
  return (
    <Container>
      <p
        className="text-center mt-5"
        style={{ color: "orange", fontSize: "30px" }}
      >
        Why DJI-X
      </p>
      <h2 className="text-center mb-5" style={{ fontSize: "50px" }}>
        Why You should be our customer
      </h2>
      <div className="text-center grid-container">
        <div className="cus">
          <div>
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/41hddNX/Screenshot-2021-10-30-014220.png"
              alt=""
            />
            <h2>
              {" "}
              <span>2000+</span>
            </h2>
            <h2 className="mt-3">world wide service center</h2>
          </div>
        </div>
        <div className="cus">
          <div>
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/s3fQpLR/Screenshot-2021-10-30-014239.png"
              alt=""
            />
            <h2>
              <span>100%</span>
            </h2>
            <h2 className="mt-3">Trusted Products</h2>
          </div>
        </div>
        <div className="cus">
          <div>
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/GRpSkCB/Screenshot-2021-10-30-014258.png"
              alt=""
            />
            <h2>
              <span>10+ </span>
            </h2>
            <h2 className="mt-3">year of dron tech experience</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Whyus;

// https://i.ibb.co/41hddNX/Screenshot-2021-10-30-014220.png
// https://i.ibb.co/s3fQpLR/Screenshot-2021-10-30-014239.png
// https://i.ibb.co/GRpSkCB/Screenshot-2021-10-30-014258.png
// https://i.ibb.co/dDhXLPZ/Screenshot-2021-10-30-014316.png
