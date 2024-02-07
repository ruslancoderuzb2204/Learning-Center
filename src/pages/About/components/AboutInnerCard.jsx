import React from "react";

const AboutInnerCard = ({ subTitle, subtext, icon }) => {
  return (
    <div className="bg-white  rounded-lg shadow-xl p-8 lg:p-6 sm:p-8 xs:p-4">
      <span className="py-2 px-3 text-2xl  bg-[#f4eadb] rounded-lg">
        {icon}
      </span>
      <h3 className="my-4 text-xl sm:text-base font-semibold md:mb-2">
        {subTitle}
      </h3>
      <p>{subtext}</p>
    </div>
  );
};

export default AboutInnerCard;
