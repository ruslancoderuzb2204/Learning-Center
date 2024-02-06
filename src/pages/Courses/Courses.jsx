import Development from "./components/Development";
import AllCourses from "./containers/AllCourses";

const Courses = () => {
  return (
    <div className="px-10 lg:px-8 md:px-6 sm:px-4 xs:px-2">
      <Development />
      <AllCourses />
    </div>
  );
};

export default Courses;
