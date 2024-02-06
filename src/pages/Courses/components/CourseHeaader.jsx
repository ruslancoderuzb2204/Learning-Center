import { Link } from "react-router-dom";

const Header = ({ title, text }) => {
  return (
    <div className=" mb-16 lg:mb-8 md:mb-4 p-4 md:p-2">
      <h2 className="text-3xl lg:text-2xl md:xl sm:text-base font-semibold">
        {title}
      </h2>
      <div className="flex justify-between mt-2 xs:block items-center">
        <p className=" text-xl md:text-sm w-3/4 xs:w-full ">{text}</p>
        <Link
          to="/courses/coursesopen"
          className="px-4 text-base sm:text-sm font-semibold inline-block sm:mt-2 py-2 md:px-2 md:py-1 xs:mt-2 bg-slate-200 rounded-md"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Header;
