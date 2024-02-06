import React from "react";

const Potential = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <h1 className="text-3xl lg:text-2xl md:text-xl font-semibold">
        <i className="fa-solid bg-[#FF9500] rounded-md px-2 py-1 fa-bolt-lightning"></i>
        <span className="text-[#FF9500]"> Unlock</span> Your Creative Potential
      </h1>
      <h2 className="text-2xl lg:text-xl md:text-md my-4 md:text-center md:my-2 sm:my-1">
        with Online Design and Development Courses
      </h2>
      <p className="text-sm">Learn from Industry and Enhance Your Skills</p>
      <div className="flex md:text-xs mt-4 md:mt-2 gap-2">
        <button className="bg-[#FF9500] rounded-md px-4 py-2">
          Explore Courses
        </button>
        <button className="px-4 bg-white py-2 rounded-md">View Pricing</button>
      </div>
    </div>
  );
};

export default Potential;
