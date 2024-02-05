import React from "react";

const OurCoursesCard = ({ title, text, time, author, img, level }) => {
  return (
    <div className="p-10 md:p-5 rounded-lg  w-full bg-white">
      <div>
        <img className="w-full" src={img} alt="img" />
      </div>
      <div className="flex text-lg justify-between my-6 md:my-3 items-center">
        <div className="flex gap-4">
          <p className="border-2 rounded-md px-2 py-1">{time}</p>
          <p className="border-2 rounded-md px-2 py-1">{level}</p>
        </div>
        <h3 className="text-xl font-semibold">{author}</h3>
      </div>
      <h2 className="text-2xl font-semibold mb-6 md:mb-3">{title}</h2>
      <p className="text-lg">{text}</p>
      <button className="w-full font-semibold mt-4 bg-[#F7F7F8] py-4 md:py-2 border-2 rounded-xl">
        Get It Now
      </button>
    </div>
  );
};

export default OurCoursesCard;
