import {
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg7,
} from "../constants";
const Brands = () => {
  const brandIcon = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
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
          <div key={icon} className="px-6 py-4 md:px-3 md:py-2">
            <img key={icon} src={icon} className="lg:w-16" alt="img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Brands;
