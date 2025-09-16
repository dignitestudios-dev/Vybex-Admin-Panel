import React from "react";
import { Outlet } from "react-router";
import { logoauth } from "../assets/export";

const AuthLayout = () => {
  return (
    <div className="w-screen min-h-screen  bg-[#02010B] relative">
      <div className="w-[700px] h-[80vh] auth_bg   top-[10px]  ">
       
      </div>
      <div className=" flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

      <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
