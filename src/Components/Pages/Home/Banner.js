import React from "react";
import image from "../../../Assets/images/pc-parts.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          className="max-w-md"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="mb-5 text-5xl text-teal-300 font-bold">
            Stay Updated With New Technology
          </h1>
          <p className="mb-5">
            We Manufacture different kinds of Personal Computer product. Our top
            rated product for your business. Get best PC parts from us and
            increase Your sell.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-[#F59B30] hover:text-white">
              Get started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
