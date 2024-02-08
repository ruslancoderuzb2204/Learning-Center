import { useState } from "react";
import { userImg2 } from "../Home/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ email, password }));
    navigate("/");
  };

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-col-reverse sm:gap-4 items-center px-10 lg:px-8 md:px-6 sm:px-4 xs:px-2">
      <div className="sm:p-6">
        <h2 className="text-2xl lg:text-xl md:text-base mb-8 lg:mb-6 md:mb-4 font-semibold">
          Students Testimonals
        </h2>
        <p className="mb-10 xl:mb-8 lg:mb-6 sm:mb-4">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="p-8 md:p-4 bg-white rounded-lg shadow-xl">
          <p className="pb-12 lg:pb-8 md:pb-4 text-lg md:text-base">
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="rounded-full" src={userImg2} alt="Sarah" />
              <h2 className="text-base font-semibold">Sarah L</h2>
            </div>
            <button className="px-4 py-2 bg-[#dedee1] rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-4/5 sm:w-full sm:px-10 xs:px-4 mx-auto rounded-xl mb-2 p-10 lg:p-8 md:p-6 h-auto">
        <h2 className="text-center text-4xl lg:text-2xl md:text-xl sm:text-base my-10 lg:my-8 md:my-4 sm:my-2 font-semibold">
          Login
        </h2>
        <p className="text-center text-lg lg:text-base md:text-sm mb-2">
          Welcome back! Please log in to access your account.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              placeholder="Enter Your Email"
              className="w-full p-6 text-2xl sm:py-2 lg:text-xl mb-4 h-10 block border rounded-lg"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <div className="flex items-center border rounded-lg">
              <input
                required
                placeholder="Enter Your Password"
                className="w-full p-6 md:p-4 text-2xl sm:py-2 lg:text-xl h-10 block rounded-lg outline-none  "
                type={showPassword ? "text" : "password"}
                value={password}
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {!showPassword ? (
                  <i className="fa-solid  fa-eye pr-4"></i>
                ) : (
                  <i className="fa-solid  fa-eye-slash pr-4"></i>
                )}
              </button>
            </div>
          </label>
          <button className="w-full text-center sm:py-2 py-4 rounded-lg mt-4 bg-[#FF9500]">
            Login
          </button>
        </form>
        <div className="bg-gray-200 w-full my-8 lg:my-6 md:my-4 h-[1px] "></div>
        <button className="bg-[#F7F7F8] w-full py-4 sm:py-2 rounded-lg font-semibold">
          <i className="fa-brands fa-google pr-2"> </i>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
