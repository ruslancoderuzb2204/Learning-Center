import QuestionsCard from "../Containers/QuestionsCard";

const Questions = () => {
  const data = [
    "Can I enroll in multiple courses at once?",
    "Enrollment Process for Different Courses",
    "What kind of support can I expect from instructors?",
    "Are the courses self-paced or do they have specific start and end dates?",
    "Are there any prerequisites for the courses?",
    "Can I download the course materials for offline access?",
  ];
  return (
    <div className="flex justify-between  gap-10 md:gap-5 p-10 lg:p-6">
      <div className="w-1/3">
        <h2 className="text-3xl font-semibold">
          Frequently <br /> Asked Questions
        </h2>
        <p className="text-lg mt-2 md:mt-1">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <button className="px-2 py-1 rounded-lg border-2 mt-10 lg:mt-8 md:mt-4">
          See All FAQ’s
        </button>
      </div>
      <div className="p-16 w-2/3 border-2  rounded-lg lg:p-10 md:p-5">
        {data.map((item) => (
          <QuestionsCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
