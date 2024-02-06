import { useParams } from "react-router-dom";
import { data } from "../../dataBase/coursesData";
import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
const CoursesOpenPage = () => {
  const { id } = useParams();
  const datas = data[id - 1];
  const { title, text, singleImg, theme } = datas;
  return (
    <div className="px-10 lg:px-8 md:px-6 sm:px-4 xs:px-2">
      <Header title={title} text={text} />
      <div>
        <img className="w-full" src={singleImg} alt="img" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 xl:gap-8 lg:gap-6 md:gap-4 mt-10 lg:mt-8 md:mt-6 sm:mt-4 xs:mt-2">
        {theme.map((item, index) => (
          <CourseCard key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesOpenPage;
