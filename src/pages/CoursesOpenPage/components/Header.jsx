const Header = ({ text, title }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:text-center mb-10 2xl:mb-8 xl:mb-6 lg:mb-4 md:mb-2  sm:mb-4 sm:px-8 items-center gap-4 md:gap-2  py-10 lg:py-8 md:py-6 sm:py-4 xs:py-2">
      <h1 className="text-4xl lg:text-2xl md:text-xl  font-semibold">
        {title}
      </h1>
      <p className="text-lg lg:text-base md:text-sm">{text}</p>
    </div>
  );
};

export default Header;
