import { Link } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="w-[200px] h-[auto]  absolute top-0 right-0 bg-white">
      <div className="flex justify-end p-4">
        <button onClick={() => setOpenModal(false)}>❌</button>
      </div>
      <ul
        className="px-4 flex text-center  pb-4 flex-col gap-4"
        onClick={() => setOpenModal(false)}
      >
        <li className="  border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link className="px-14 py-2 inline-block" to="/">
            Home
          </Link>
        </li>
        <li className=" border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link className="px-14 py-2 inline-block       " to="/courses">
            Courses
          </Link>
        </li>
        <li className=" border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link className="px-12 py-2 inline-block " to="/about">
            About Us
          </Link>
        </li>
        <li className=" border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link className="px-14 py-2 inline-block" to="/pricing">
            Pricing
          </Link>
        </li>
        <li className=" border-2 rounded-lg shadow-xl bg-slate-300 text-center cursor-pointer">
          <Link className="px-14 py-2 inline-block" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
