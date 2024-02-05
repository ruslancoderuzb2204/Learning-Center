const Brands = () => {
  const brandIcon = [
    "http://localhost:5173/src/pages/home/constants/Vector(1).png",
    "http://localhost:5173/src/pages/home/constants/Vector(2).png",
    "http://localhost:5173/src/pages/home/constants/Vector(3).png",
    "http://localhost:5173/src/pages/home/constants/Vector(4).png",
    "http://localhost:5173/src/pages/home/constants/Logo.png",
    "http://localhost:5173/src/pages/home/constants/Vector(5).png",
    "http://localhost:5173/src/pages/home/constants/Vector(6).png",
  ];
  return (
    <>
      <div className="bg-white flex sm:hidden items-center justify-between p-4  md:p-2 md:mt-5 rounded-lg mt-10">
        {brandIcon.map((icon) => (
          <div className="px-6 py-4 md:px-3 md:py-2">
            <img src={icon} className="lg:w-16" alt="img" />
          </div>
        ))}
      </div>
      <div className="bg-white hidden sm:flex  items-center justify-between p-4 md:p-2 md:mt-5 rounded-lg mt-10">
        {brandIcon.slice(0, 3).map((icon) => (
          <div className="px-6 py-4 md:px-3 md:py-2">
            <img src={icon} className="lg:w-16" alt="img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Brands;
