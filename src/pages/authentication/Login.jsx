import React, { useContext, useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";

import { NavLink, useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginImg } from "../../assets/export";
import { loginValues } from "../../init/authentication/dummyLoginValues";
import { signInSchema } from "../../schema/authentication/authenticationSchema";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { AppContext } from "../../context/AppContext";


const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 

  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);
const [loading, setloading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: loginValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          setloading(true)
          const response = await axios.post("/auth/signIn", {
            emailOrUsername: values.email,
            password: values.password,
            role: "admin",
          });
          
          if (response?.status === 200) {
            handleLogin(response?.data)
            console.log(response,"response")
            
            navigate("/dashboard");
           
          }
        } catch (err) {
          ErrorToast(
            err.response?.data?.message || "Login failed. Please try again."
          );
        } finally {
          setloading(false);
        }
      },
    });

  return (
    <div className="w-[599px] h-[650px] flex flex-col items-center  justify-center  gap-10  rounded-[19px] border-[0.8px] bg-[#000000] ">
      <img src={loginImg} alt="orange_logo" className="w-[148.4px] " />
      <div className="w-auto flex flex-col  justify-center items-center gap-1 ">
        <h2 className="text-[32px] font-[600] text-white">login As Sub Admin</h2>
        <p className="text-[13px] font-[400] text-center  text-[#FFFFFF]">
        Welcome back! Enter your details to login
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        
        }}
        className="w-full md:w-[393px]  flex flex-col justify-start items-start gap-10"
      >
        <div className="w-full h-auto flex flex-col justify-start items-start   ">
        <div className="w-full h-auto flex flex-col justify-start items-start gap-1 ">
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-[49px] border-[0.8px]  outline-none bg-[#000000] text-white  rounded-t-[12px] placeholder:text-[#959393]  px-3 text-[16px] font-normal leading-[20.4px] ${
              errors?.email && touched?.email
                ? "border-red-500"
                : "border-[#D9D9D9]"
            }`}
            placeholder="Email Address"
          />
          {errors.email && touched.email ? (
            <p className="text-red-700 text-sm font-medium">{errors.email}</p>
          ) : null}
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
          <div
            className={`h-[49px] flex justify-start bg-[#000000]  items-start w-full relative border-[0.8px]  border-[#D9D9D9] rounded-b-[12px] ${
              errors?.password && touched?.password
                ? "border-red-500"
                : "border-[#D9D9D9]"
            }`}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[90%] h-full  bg-transparent rounded-b-[12px] placeholder:text-[#959393] outline-none text-white px-3 text-[16px] font-normal leading-[20.4px]"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
            >
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          {errors.password && touched.password ? (
            <p className="text-red-700 text-sm font-medium">
              {errors.password}
            </p>
          ) : null}
        </div>
        </div>

        

        <button
          type="submit"
          
          className="w-full h-[49px] rounded-[100px] btn-gradient text-white flex gap-2 items-center justify-center text-md font-medium"
        >
          <span>Log In</span>
          {loading && <FiLoader className="animate-spin text-lg " />}
        </button>

       
      </form>
      <div className="w-full -mt-1  flex items-center justify-center">
          <button onClick={() => navigate("/auth/forgotpassword")} className="text-white hover:no-underline  text-[16px] font-[600] leading-[20.4px]">Forgot Password?</button>
            
         
        </div>
    </div>
  );
};

export default Login;

