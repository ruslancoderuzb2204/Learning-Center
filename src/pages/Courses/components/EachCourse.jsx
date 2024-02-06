import React from "react";
import Header from "./CourseHeaader";
import CoursesInnerCard from "./CoursesInnerCard";

const EachCourse = ({
  title,
  text,
  img1,
  img2,
  img3,
  time,
  level,
  author,
  theme,
}) => {
  return (
    <div className="bg-white p-10 xl:p-8 lg:p-6 md:p-4 sm:p-2 rounded-lg mb-10 lg:mb-8 md:mb-5 sm:mb-3">
      <Header title={title} text={text} />
      <div className="grid gap-6 xs:gap-2 grid-cols-3">
        <div>
          <img className="w-full" src={img1} alt="img" />
        </div>
        <div>
          <img className="w-full" src={img2} alt="img" />
        </div>
        <div>
          <img className="w-full" src={img3} alt="img" />
        </div>
      </div>
      <div className="flex justify-between items-center py-6 lg:py-4 md:py-2 text-lg lg:text-base md:text-sm">
        <div className="flex gap-4 mg:gap-2">
          <p className="border rounded-md px-4 py-1">{time}</p>
          <p className="border  rounded-md px-4 py-1">{level}</p>
        </div>
        <h3 className="font-semibold">{author}</h3>
      </div>
      <div className="border rounded-md p-4 text-xl font-semibold">
        <h3>Curriculum</h3>
        <div className="flex justify-between  sm:hidden xs:flex xs:flex-col xs:gap-0 gap-4">
          {theme.map((item, index) => (
            <CoursesInnerCard item={item} num={index} key={item} />
          ))}
        </div>
        <div className=" justify-between hidden sm:flex xs:hidden gap-4">
          {theme.slice(0, 3).map((item, index) => (
            <CoursesInnerCard item={item} num={index} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EachCourse;
