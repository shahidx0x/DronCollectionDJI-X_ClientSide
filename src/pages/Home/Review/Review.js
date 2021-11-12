import React from "react";
import { Container } from "react-bootstrap";
import useReview from "../../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [reviews] = useReview();
  return (
    <Container>
      <p
        className="text-center mt-5"
        style={{ color: "orange", fontSize: "30px" }}
      >
        Our Customar
      </p>
      <h2 className="text-center" style={{ fontSize: "50px" }}>
        What Our Customers Say About Us
      </h2>
      <div className="grid-container text-center mt-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </Container>
  );
};

export default Review;
