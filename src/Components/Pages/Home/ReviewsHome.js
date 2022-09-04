import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import ReviewHome from "./ReviewHome";

const ReviewsHome = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("review.json").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-14">
      <h1 className="text-3xl font-bold my-10 text-center text-secondary uppercase">
        Our happy Customers Feedback
      </h1>
      <div className="grid md:grid-cols-3 gap-7 container mx-auto">
        {reviews.map((review) => (
          <ReviewHome review={review} key={review.id}></ReviewHome>
        ))}
      </div>
    </div>
  );
};

export default ReviewsHome;
