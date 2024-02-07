import AboutInnerCard from "../components/AboutInnerCard";

const AboutCard = ({ title, text, innerData }) => {
  return (
    <div data-aos="fade-left" className="mb-20 lg:mb-10 md:mb-5">
      <h2 className="text-2xl mb-4 md:mb-2  lg:text-xl md:text-base font-semibold">
        {title}
      </h2>
      <p className="text-lg lg:text-base md:text-sm mb-8 lg:mb-6 md:mb-4">
        {text}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 lg:gap-8 md:gap-6">
        {innerData.map((item) => (
          <AboutInnerCard key={item.subTitle} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
