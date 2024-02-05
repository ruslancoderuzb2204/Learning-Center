import BenefitCard from "../Containers/BenefitCard";
import Header from "../../../components/innerHeader";

const Benefits = () => {
  const data = [
    {
      num: "01",
      title: "Flexible Learning Schedule",
      text: "Fit your coursework around your existing commitments and obligations and assignments",
    },
    {
      num: "02",
      title: "Expert Instruction",
      text: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      num: "03",
      title: "Diverse Course Offerings",
      text: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      num: "04",
      title: "Updated Curriculum",
      text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      num: "05",
      title: "Practical Projects ",
      text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      num: "06",
      title: "Interactive Learning Environment",
      text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <div>
      <Header title="Benefits" />
      <div className="grid grid-cols-3 gap-8 md:gap-4 mt-8 md:mt-4">
        {data.map((item) => (
          <BenefitCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
