import Header from "../../../components/innerHeader";
import OurCoursesCard from "../Containers/OurCoursesCard";

const OurCourses = () => {
  const data = [
    {
      img: "http://localhost:5173/src/pages/home/constants/image1.png",
      time: "4 weeks",
      level: "Beginner",
      author: "By John",
      title: "Web Design Fundamentals",
      text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    },
    {
      img: "http://localhost:5173/src/pages/home/constants/image2.png",
      time: "6 weeks",
      level: "Intermidiate",
      author: "By Emily",
      title: "UI/UX Design",
      text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    },
    {
      img: "http://localhost:5173/src/pages/home/constants/image3.png",
      time: "8 weeks",
      level: "Intermidiate",
      author: "By David ",
      title: "Mobile App Development",
      text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      img: "http://localhost:5173/src/pages/home/constants/image4.png",
      time: "10 weeks",
      level: "Beginner",
      author: "By Sarah ",
      title: "Graphic Design for Beginners",
      text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media..",
    },
    {
      img: "http://localhost:5173/src/pages/home/constants/image5.png",
      time: "10 weeks",
      level: "Intermidiate",
      author: "By Michael",
      title: "Front-End Web Development",
      text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    },
    {
      img: "http://localhost:5173/src/pages/home/constants/image6.png",
      time: "6 weeks",
      level: "Advance",
      author: "By Jennifer",
      title: "Advanced JavaScript",
      text: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    },
  ];
  return (
    <div>
      <Header title="Our Courses" />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
        {data.map((item) => (
          <OurCoursesCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
