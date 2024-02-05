const Header = ({ title }) => {
  return (
    <div className=" my-16 lg:my-8 md:my-4">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="flex justify-between mt-2 items-center">
        <p className=" text-xl w-3/4 ">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="px-4 py-2 md:px-2 md:py-1 bg-white rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default Header;
