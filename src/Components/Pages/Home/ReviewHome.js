import React from "react";

const ReviewHome = ({ review }) => {
  return (
    <div>
      <div
        className="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg mt-20 border-r-2 border-t-2 border-[#EDAC60]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-primary"
            src={review.image}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            <div className="rating">
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-amber-500"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-amber-500"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-amber-500"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-amber-500"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-amber-500"
              />
            </div>
          </h2>
          <p className="mt-2 text-gray-600">{review.review}</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="/" className="text-xl font-medium text-secondary">
            {review.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
