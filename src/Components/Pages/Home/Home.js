import React from "react";
import Banner from "./Banner";
import Parts from "./Parts";
import ReviewHome from "./ReviewHome";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Summary></Summary>
      <ReviewHome></ReviewHome>
    </div>
  );
};

export default Home;
