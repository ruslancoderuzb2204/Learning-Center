import EachCourse from "../components/EachCourse";
import { data } from "../../../dataBase/coursesData";
const AllCourses = () => {
  
  return (
    <div className="mb-10 md:mb-5">
      {data.map((item, index) => (
        <EachCourse key={index} {...item} />
      ))}
    </div>
  );
};

export default AllCourses;
