import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import useReview from "../../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [reviews] = useReview();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
      {/* <div className="grid-container text-center mt-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div> */}
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </Carousel>
      ;
    </Container>
  );
};

export default Review;
