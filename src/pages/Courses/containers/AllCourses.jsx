import EachCourse from "../components/EachCourse";
import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../images";
const AllCourses = () => {
  const data = [
    {
      title: "Web Design Fundamentals",
      text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      img1: Img1,
      img2: Img2,
      img3: Img3,
      time: "4 weeks",
      level: "Beginner",
      author: "By John",
      theme: [
        "Introduction to HTML",
        "Styling with CSS",
        "Introduction to Responsive",
        "Design Principles for Web",
        "Building a Basic Website",
      ],
    },
    {
      text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
      title: "UI/UX Design",
      img1: Img4,
      img2: Img5,
      img3: Img6,
      time: "6 weeks",
      level: "Intermidiate",
      author: "By Emily",
      theme: [
        "Introduction to UI/UX Design",
        "User Research and Personas",
        "Wireframing and Prototyping",
        "Visual Design and Branding",
        "Usability Testing and Iteration",
      ],
    },
    {
      text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
      title: "Mobile App Development",
      img1: Img7,
      img2: Img8,
      img3: Img9,
      time: "8 weeks",
      level: "Intermidiate",
      author: "By David",
      theme: [
        "Introduction to Mobile App Development",
        "Fundamentals of Swift Programming (iOS)",
        "Fundamentals of Kotlin Programming (Android)",
        "Building User Interfaces",
        "App Deployment and Testing",
      ],
    },
    {
      text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
      title: "Graphic Design for Beginners",
      img1: Img10,
      img2: Img11,
      img3: Img12,
      time: "10 weeks",
      level: "Beginner",
      author: "By Sarah",
      theme: [
        "Introduction to Graphic Design",
        "Typography and Color Theory",
        "Layout Design and Composition",
        "Image Editing and Manipulation",
        "Designing for Print and Digital Media",
      ],
    },
    {
      text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
      title: "Front-End Web Development",
      img1: Img13,
      img2: Img14,
      img3: Img15,
      time: "10 weeks",
      level: "Intermidiate",
      author: "By Michael",
      theme: [
        "HTML fundamentals",
        "CSS Styling and Layouts",
        "JavaScript Basics",
        "Building Responsive Websites",
        "Introduction to Bootstrap and React",
      ],
    },
  ];
  return (
    <div className="mb-10 md:mb-5">
      {data.map((item, index) => (
        <EachCourse key={index} {...item} />
      ))}
    </div>
  );
};

export default AllCourses;
