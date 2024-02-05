import { NavLink } from "react-router-dom";
import { Logo } from "../constants/Logo";

const Footer = () => {
  return (
    <div>
      <div className="bg-white text-lg lg:text-base md:text-sm  grid grid-cols-2 md:grid-cols-1 md:gap-4 px-20 lg:px-10 md:px-5 pt-20 lg:pt-10 md:pt-5">
        <div className="md:flex items-center gap-3">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <ul className="mt-10 lg:mt-6 md:mt-3">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              <p>hello@skillbridge.com</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              <p>+91 91813 23 2309</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot"></i>
              <p>Tashkent</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl lg:text-base md:text-sm xs:text-xs mb-4 md:mb-2 font-semibold">
              Home
            </h2>
            <ul>
              <li>
                <p>Benefits</p>
              </li>
              <li>
                <p>Our Courses</p>
              </li>
              <li>
                <p>Our Testimonials</p>
              </li>
              <li>
                <p>Our FAQ</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl lg:text-base md:text-sm mb-4 md:mb-2 font-semibold">
              About Us
            </h2>
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>
                <p>Achievemants</p>
              </li>
              <li>
                <p>Our Goals</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl lg:text-base md:text-sm mb-4 md:mb-2 font-semibold">
              Social Profiles
            </h2>
            <ul className="flex gap-2">
              <li className="bg-[#F7F7F8] px-2 py-1 rounded-md">
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li className="bg-[#F7F7F8] px-2 py-1 rounded-md">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="bg-[#F7F7F8] px-2 py-1 rounded-md">
                <i className="fa-brands fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center py-10 lg:py-7 md:py-4 sm:py-2 xs:py-1 md:my-5 sm:my-3 xs:my-1 text-sm opacity-65">
        © 2023 Skillbridge. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
