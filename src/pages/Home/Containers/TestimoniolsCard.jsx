import React from "react";

const TestimoniolsCard = ({ img, name, text }) => {
  return (
    <div className="bg-white p-12 lg:p-8 md:p-4 rounded-lg">
      <p className="text-xl font-medium mb-8 lg:mb-6 md:mb-4">{text}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={img} alt={name} />
          <h2 className="font-semibold text-lg">{name}</h2>
        </div>
        <button className="px-2 py-1 rounded-lg border-2 bg-[#F7F7F8]">
          Read Full Story
        </button>
      </div>
    </div>
  );
};

export default TestimoniolsCard;
