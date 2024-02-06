import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../constants/Logo";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(true);
  };
  const logOutHandle = () => {
    const confirmData = confirm("Are you Sure?");
    if (confirmData) {
      localStorage.removeItem("userData");
      navigate("login");
    }
  };

  return (
    <div className="max-w-[1920px] relative mx-auto md:text-sm">
      <div className=" mx-auto flex items-center gap-4 justify-center text-white md:py-2 md:px-4 py-5 px-7 rounded-lg bg-[#FF9500]">
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <i className="fa-solid text-white fa-arrow-right"></i>
      </div>
      <div className="py-5 text-md flex md:py-3 md:px-5 items-center justify-between px-10 mx-auto">
        <div className="flex items-center sm:block gap-20 lg:gap-10 md:gap-5">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <nav className="sm:hidden">
            <ul className="flex items-center gap-20 2xl:gap-16 xl:gap-14 lg:gap-8 md:gap-5">
              <li>
                <NavLink
                  className="px-4 py-2 rounded-md hover:bg-[#bab3b3]"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 rounded-md hover:bg-[#bab3b3]"
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 rounded-md hover:bg-[#bab3b3]"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 rounded-md hover:bg-[#bab3b3]"
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="px-4 py-2 rounded-md hover:bg-[#bab3b3]"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="block sm:flex gap-2">
          <div className="flex gap-2">
            {userData ? (
              <button
                onClick={logOutHandle}
                className="px-4 py-2 bg-red-400 rounded-md"
              >
                LogOut
              </button>
            ) : (
              <NavLink
                className="bg-[#FF9500] rounded-md px-4 py-2"
                to={userData ? "/" : "login"}
              >
                Login
              </NavLink>
            )}
          </div>
          <div className="hidden sm:block">
            <button onClick={toggleModal} className="p-2">
              <i className="fa-solid fa-bars "></i>
            </button>
          </div>
        </div>
      </div>
      <div>{openModal && <Modal setOpenModal={setOpenModal} />}</div>
    </div>
  );
};

export default Header;
