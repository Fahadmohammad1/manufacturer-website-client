import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { image, price, name, _id } = part;
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto ">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div className="w-56 -mt-12 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              ${price}
            </span>
            <button
              onClick={() => navigate(`/purchase/${_id}`)}
              className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              purchase now
            </button>
          </div>
          <p className="p-2 text-gray-800 dark:text-white">
            {part.description.slice(0, 90)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part;
