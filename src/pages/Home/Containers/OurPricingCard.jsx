import React from "react";

const OurPricingCard = ({ title, price, freePlanFalse, freePlanTrue }) => {
  return (
    <div className="p-8 lg:p-6 md:p-4 border-2 rounded-lg">
      <h2 className="text-2xl font-semibold border-2 rounded-lg w-full py-3 text-center bg-[#FFF9F0]">
        {title}
      </h2>
      <p className="text-6xl text-center  my-8 lg:my-6 md:my-5 font-bold">
        ${price}
        <span className="text-xl font-normal ">/month</span>
      </p>
      <div className="p-8 lg:p-6 md:p-4 border-2 rounded-t-lg">
        <h3 className="text-center text-2xl font-semibold">
          Available Features
        </h3>
        <div>
          {freePlanTrue.map((item) => (
            <div className="flex items-center gap-4 md:gap-2 border-2 rounded-lg pl-10 py-4 mt-6 text-lg">
              <span className="bg-[#FFF4E6] rounded-md p-2">✔️</span>
              <p>{item}</p>
            </div>
          ))}
          {freePlanFalse.map((item) => (
            <div className="flex items-center gap-4 md:gap-2 border-2 rounded-lg pl-10 py-4 mt-6 text-lg">
              <span className="bg-[#FFF4E6] rounded-md p-2">❌</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full py-6 lg:py-4 md:py-2 rounded-b-lg text-xl text-white font-semibold bg-[#FF9500]">
        Get Started
      </button>
    </div>
  );
};

export default OurPricingCard;
