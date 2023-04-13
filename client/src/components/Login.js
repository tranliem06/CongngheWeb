import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "./";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = {};

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0  flex items-center justify-center z-20">
        <div className="w-full md:w-375 p-4 pb-8 bg-gray-100 rounded-md shadow-lg   backdrop-blur-md flex flex-col items-center justify-center gap-4 border-4 border-primarycolor">
          <div className="flex gap-2 items-center justify-start">
            <p className="text-[24px] text-primarycolor font-semibold uppercase">
              EasyDone
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4 p-0">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
              // value=""
              // onChange=""
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
              // value=""
              // onChange=""
            />
          </div>
          <div
            className="flex items-center justify-center  gap-2 px- py-3 rounded-md w-full bg-primarycolor text-white cursor-pointer hover:bg-primaryHovercolor duration-100 ease-in-out transition-all"
            onClick={handleLogin}
          >
            <p className="">Sign In</p>
          </div>

          <div className="flex gap-2 items-center justify-start">
            <p className="text-[18px] text-base">First Time Here?</p>
          </div>
          <div className="flex items-center justify-center  gap-2 px- py-3 rounded-md w-full bg-[#71b7e6] text-white cursor-pointer hover:bg-[#7db9ff] duration-100 ease-in-out transition-all">
            <NavLink to={"/signup"}>
              <p className="">Sign Up</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
