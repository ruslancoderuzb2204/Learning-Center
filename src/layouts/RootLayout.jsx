import { Outlet, useNavigate } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { Login } from "../pages";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      navigate("login");
      alert("Please use for this site before Login!")
    } else {
      navigate("/");
    }
  }, [userData]);
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
