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
    <div>
      <h1 className="text-3xl font-bold font-serif my-10 text-center">
        Our happy Customers Feedback {reviews.length}
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
