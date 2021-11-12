import React from "react";
import { Container } from "react-bootstrap";
import RaCard from "./RaCard";

const AllReviews = () => {
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dronsite.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2>
        <span>Manage all Reviews</span>
      </h2>
      {reviews.map((review) => (
        <RaCard key={review._id} review={review}></RaCard>
      ))}
    </Container>
  );
};

export default AllReviews;
