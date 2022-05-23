import React from "react";
import Banner from "./Banner";
import Parts from "./Parts";
import ReviewsHome from "./ReviewsHome";

import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Summary></Summary>
      <ReviewsHome></ReviewsHome>
    </div>
  );
};

export default Home;
