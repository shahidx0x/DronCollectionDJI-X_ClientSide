import React from "react";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Whyus from "../Whyus/Whyus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <br />
      <Whyus></Whyus>
      <Services></Services>
      <Review></Review>
    </div>
  );
};

export default Home;
