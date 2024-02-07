import { useState } from "react";
import { Link } from "react-router-dom";

const QuestionsCard = ({ item }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <>
      <div className="flex text-xl lg:text-base md:text-sm items-center gap-2 justify-between mt-8 lg:mt-6 md:mt-4">
        <h3>{item}</h3>
        <button
          onClick={() => setShowAccordion(!showAccordion)}
          className="bg-[#FFF4E6] rounded-md p-2"
        >
          {showAccordion ? "➖" : "➕"}
        </button>
      </div>
      <div
        className={
          showAccordion
            ? " flex justify-between items-center md:block"
            : "hidden"
        }
      >
        <p className="text-base p-4 md:w-full md:mt-2 rounded-md bg-blue-100 w-2/3">
          Absolutely! You can enroll in multiple courses simultaneously and
          access them at your convenience.
        </p>
        <Link
          className="px-4 py-2 inline-block mt-2 xs:w-full xs:text-center rounded-md bg-yellow-200"
          to="/contact"
        >
          Ask More
        </Link>
      </div>
    </>
  );
};

export default QuestionsCard;
