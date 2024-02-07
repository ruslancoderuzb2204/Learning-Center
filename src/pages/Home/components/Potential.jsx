import React from "react";
import { Link } from "react-router-dom";

const Potential = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
      className="flex flex-col justify-center items-center mx-auto"
    >
      <h1 className="text-3xl bg-white px-4 py-2 rounded-lg shadow-2xl lg:text-2xl md:text-xl font-semibold">
        <i className="fa-solid bg-[#FF9500] rounded-md px-2 py-1 fa-bolt"></i>
        <span className="text-[#FF9500]"> Unlock</span> Your Creative Potential
      </h1>
      <h2 className="text-2xl lg:text-xl md:text-md my-4 md:text-center md:my-2 sm:my-1">
        with Online Design and Development Courses
      </h2>
      <p className="text-sm">Learn from Industry and Enhance Your Skills</p>
      <div className="flex md:text-xs mt-4 md:mt-2 gap-2">
        <Link to="/courses" className="bg-[#FF9500] rounded-md px-4 py-2">
          Explore Courses
        </Link>
        <Link to="/pricing" className="px-4 bg-white py-2 rounded-md">
          View Pricing
        </Link>
      </div>
    </div>
  );
};

export default Potential;
