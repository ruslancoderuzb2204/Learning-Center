import { Link } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="w-[200px] h-[auto] absolute transition duration-300 delay-500 animate-wiggle ease-in top-0 right-0 bg-white">
      <div className="flex justify-end p-4">
        <button onClick={() => setOpenModal(false)}>❌</button>
      </div>
      <ul
        className="px-4 flex pb-4 flex-col gap-4"
        onClick={() => setOpenModal(false)}
      >
        <li className="px-4 py-2 border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="px-4 py-2 border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-4 py-2 border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="px-4 py-2 border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
