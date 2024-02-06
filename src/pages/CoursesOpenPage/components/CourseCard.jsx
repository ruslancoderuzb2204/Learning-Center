import React from "react";
import CourseInnerCard from "./CourseInnerCard";

const CourseCard = ({ item, index }) => {
  return (
    <div className="p-16 xl:p-12 lg:p-8 md:p-4 sm:p-2 bg-white rounded-lg">
      <p className="text-end text-6xl xl:text-4xl lg:text-2xl md:text-xl font-bold">
        0{index + 1}
      </p>
      <h2 className="text-2xl lg:text-xl md:text-lg sm:text-xl font-semibold">
        {item}
      </h2>
      <CourseInnerCard />
    </div>
  );
};

export default CourseCard;
