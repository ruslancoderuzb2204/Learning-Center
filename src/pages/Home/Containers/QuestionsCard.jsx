import React from "react";

const QuestionsCard = ({ item }) => {
  return (
    <div className="flex text-xl items-center justify-between mt-8 lg:mt-6 md:mt-4">
      <h3>{item}</h3>
      <button className="bg-[#FFF4E6] rounded-md p-2">➕</button>
    </div>
  );
};

export default QuestionsCard;
