import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { Login } from "../pages";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!userData) {
      navigate("login");
    } else {
      navigate("/");
    }
  }, [userData]);
  useEffect(() => {
    if (!userData && location.pathname !== "/login") {
      navigate("login");

      alert("Please Login before using!");
    }
  }, [userData, location]);
  return (
    <div className="overflow-hidden">
      <header className="bg-[#F7F7F8] max-w-[1920px] mx-auto md:text-sm">
        <Header />
      </header>
      <main className="bg-[#F7F7F8] max-w-[1920px] mx-auto md:text-sm">
        {userData ? <Outlet /> : <Login />}
      </main>
      <footer className="bg-[#F7F7F8] max-w-[1920px] mx-auto  md:text-sm">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
