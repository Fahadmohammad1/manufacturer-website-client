import React from "react";

const ReviewHome = ({ review }) => {
  return (
    <div>
      <div className="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg mt-20 border-r-2 border-t-2 border-[#EDAC60]">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-secondary"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
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
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                defaultChecked
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
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
