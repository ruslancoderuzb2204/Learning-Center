import Header from "../../../components/innerHeader";
import TestimoniolsCard from "../Containers/TestimoniolsCard";
import { userImg1, userImg2, userImg3, userImg4 } from "../constants";
const Testimonials = () => {
  const data = [
    {
      img: userImg1,
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
    },
    {
      img: userImg2,
      text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      name: "Jason M",
    },
    {
      img: userImg3,
      text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      name: "Emily M",
    },
    {
      img: userImg3,
      text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance  my design abilities significantly. I'm grateful for this course!",
      name: "Michael K",
    },
  ];
  return (
    <div>
      <Header title={"Our Testimonials"} />
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10 lg:gap-6 md:gap-4">
        {data.map((item) => (
          <TestimoniolsCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
