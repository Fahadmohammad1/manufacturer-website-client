import React from "react";

const ReviewHome = ({ review }) => {
  return (
    <div>
      <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20 border-r-2 border-t-2 border-[#EDAC60]">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </h2>
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="/" class="text-xl font-medium text-indigo-500">
            {review.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
