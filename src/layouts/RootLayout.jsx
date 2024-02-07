import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const RootLayout = () => {
  return (
    <div className="overflow-hidden">
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
