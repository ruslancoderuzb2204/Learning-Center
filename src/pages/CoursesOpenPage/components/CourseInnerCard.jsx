import React from "react";

const CourseInnerCard = () => {
  return (
    <>
      <div className=" items-center flex     justify-between  p-6 lg:p-3 md:p-2 sm:p-6 xs:p-4 border rounded-lg my-5 lg:my-4 md:my-2">
        <div className="w-2/3 ">
          <h2 className="text-xl font-semibold lg:text-lg md:text-base">
            Conducting User Research and Interviews
          </h2>
          <p className="text-lg lg:text-base md:sm">Lesson 1</p>
        </div>
        <p className="px-2 text-base md:text-sm sm:text-sm w-auto  py-1 border rounded-md">
          <i className="fa-regular fa-clock text-gray"></i> 1 hour
        </p>
      </div>
      <div className=" items-center flex    justify-between  p-6 lg:p-4 md:p-2 sm:p-6 xs:p-4 border rounded-md my-5 lg:my-4 md:my-2">
        <div className="w-2/3 ">
          <h2 className="text-xl font-semibold grid lg:text-lg md:text-base">
            Analyzing User Needs and Behavior
          </h2>
          <p className="text-lg lg:text-base md:sm">Lesson 2</p>
        </div>
        <p className="px-2 text-base md:text-sm sm:text-sm w-auto  py-1 border rounded-md">
          <i className="fa-regular fa-clock text-gray"></i> 2 hours
        </p>
      </div>
      <div className="flex    justify-between  items-center  p-6 lg:p-4 md:p-2 sm:p-6 xs:p-4 border rounded-md my-5 lg:my-4 md:my-2">
        <div className="w-2/3 ">
          <h2 className="text-xl font-semibold lg:text-lg md:text-base">
            Creating User Personas and Scenarios
          </h2>
          <p className="text-lg lg:text-base md:sm">Lesson 3</p>
        </div>
        <div>
          <p className="px-2 text-base md:text-sm sm:text-sm w-auto  py-1 border rounded-md">
            <i className="fa-regular fa-clock text-gray"></i> 3 hours
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseInnerCard;
