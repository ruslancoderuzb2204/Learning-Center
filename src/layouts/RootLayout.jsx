import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (userData && location.pathname === "/login") {
      navigate("/");
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!userData && location.pathname !== "/login") {
      navigate("login");
      alert("Please Login before using!");
    }
  }, [userData, location]);
  return (
    <div className="overflow-hidden ">
      <header className="bg-[#F7F7F8] max-w-[1920px] mx-auto md:text-sm">
        <Header />
      </header>
      <main className="bg-[#F7F7F8] max-w-[1920px] mx-auto md:text-sm">
        <Outlet />
      </main>
      <footer className="bg-[#F7F7F8] max-w-[1920px] mx-auto  md:text-sm">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
