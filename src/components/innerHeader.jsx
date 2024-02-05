const Header = ({ title }) => {
  return (
    <div className=" my-16 lg:my-8 md:my-4 p-4 md:p-2">
      <h2 className="text-3xl lg:text-2xl md:xl font-semibold">{title}</h2>
      <div className="flex justify-between mt-2 xs:block items-center">
        <p className=" text-xl md:text-sm w-3/4 xs:w-full ">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="px-4 py-2 md:px-2 md:py-1 xs:mt-2 bg-white rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default Header;
