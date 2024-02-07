const OurCoursesCard = ({ title, text, time, author, img, level }) => {
  return (
    <div
      data-aos="flip-up" data-aos-duration="500"
      className="p-10 lg:p-7  md:p-5 rounded-lg  w-full h-full bg-white"
    >
      <div>
        <img className="w-full" src={img} alt="img" />
      </div>
      <div className="flex text-lg lg:text-sm justify-between my-6 md:my-3 items-center">
        <div className="flex gap-4 lg:gap-2 md:gap-1">
          <p className="border-2 rounded-md px-2 py-1">{time}</p>
          <p className="border-2 rounded-md px-2 py-1">{level}</p>
        </div>
        <h3 className="text-xl lg:text-lg md:text-sm font-semibold">
          {author}
        </h3>
      </div>
      <h2 className="text-2xl lg:text-xl md:text-lg font-semibold mb-6 md:mb-3">
        {title}
      </h2>
      <p className="text-lg md:text-sm">{text}</p>
      <button className="w-full font-semibold mt-4 lg:mt-3 md:mt-2 sm:mt-1 bg-[#F7F7F8] py-4 lg:py-3 md:py-2 border-2 rounded-xl">
        Get It Now
      </button>
    </div>
  );
};

export default OurCoursesCard;
