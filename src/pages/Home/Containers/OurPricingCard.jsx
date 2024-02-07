import React from "react";

const OurPricingCard = ({ title, price, freePlanFalse, freePlanTrue }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="500" className="p-8 lg:p-6 md:p-4 border-2 rounded-lg">
      <h2 className="text-2xl lg:text-xl md:text-base font-semibold border-2 rounded-lg w-full py-3 text-center bg-[#FFF9F0]">
        {title}
      </h2>
      <p className="text-6xl lg:text-4xl md:text-2xl sm:text-xl text-center  my-8 lg:my-6 md:my-5 font-bold">
        ${price}
        <span className="text-xl lg:text-base md:text-sm font-normal ">
          /month
        </span>
      </p>
      <div className="p-8 lg:p-6 md:p-4 sm:p-2 border-2 rounded-t-lg">
        <h3 className="text-center text-2xl lg:text-xl md:text-base sm:text-sm font-semibold">
          Available Features
        </h3>
        <div>
          {freePlanTrue.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 md:gap-2 sm:gap-1 border-2 rounded-lg pl-10 lg:pl-8 md:pl-6 sm:pl-4 xs:pl-2 py-4 mt-6 md:mt-4 sm:mt-2 text-lg lg:text-base md:text-sm"
            >
              <span className="bg-[#FFF4E6] rounded-md p-2">✔️</span>
              <p>{item}</p>
            </div>
          ))}
          {freePlanFalse.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 md:gap-2 sm:gap-1 border-2 rounded-lg pl-10 lg:pl-8 md:pl-6 sm:pl-4 xs:pl-2 py-4 mt-6 md:mt-4 sm:mt-2 text-lg lg:text-base md:text-sm"
            >
              <span className="bg-[#FFF4E6] rounded-md p-2">❌</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full py-6 lg:py-4 md:py-2 rounded-b-lg text-xl lg:text-base md:text-sm text-white font-semibold bg-[#FF9500]">
        Get Started
      </button>
    </div>
  );
};

export default OurPricingCard;
