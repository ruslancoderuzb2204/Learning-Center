const Header = ({ text, title }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="grid  grid-cols-2 sm:grid-cols-1 sm:text-center mb-8 xl:mb-6 lg:mb-4 md:mb-2  sm:mb-4 sm:px-8 items-center gap-4 md:gap-2   p-10 lg:p-8 md:p-6 sm:p-4 xs:p-2"
    >
      <h1 className="text-4xl lg:text-2xl md:text-xl  font-semibold">
        {title}
      </h1>
      <p className="text-lg lg:text-base md:text-sm">{text}</p>
    </div>
  );
};

export default Header;
