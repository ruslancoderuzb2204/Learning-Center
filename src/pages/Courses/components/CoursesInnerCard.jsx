const CoursesInnerCard = ({ item, num }) => {
  return (
    <div className="w-full py-4 md:py-2">
      <p className="text-4xl lg:text-2xl md:text-xl sm:text-base xs:text-2xl py-2 font-bold">
        0{num + 1}
      </p>
      <h4 className="text-base md:text-sm sm:text-xs xs:text-base">{item}</h4>
    </div>
  );
};

export default CoursesInnerCard;
