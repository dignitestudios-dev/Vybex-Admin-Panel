import React, { useContext, useState } from "react";

import {  Update } from "../../assets/export";
import { useFormik } from "formik";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import axios from "../../axios";
import { AppContext, AppContextProvider } from "../../context/AppContext";

import { FiLoader } from "react-icons/fi";
import { ChangedValues } from "../../init/authentication/dummyLoginValues";
import { ChangedSchema } from "../../schema/authentication/authenticationSchema";
import UpdatePasswordSuccessfully from "../../components/authentication/UpdatePasswordSuccessFully";
export default function ChangePassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const navigate=useNavigate("");
  const [loading,setloading]=useState(false)
 const {setUpdatePasswordSuccessfully}=useContext(AppContext)
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ChangedValues,
      validationSchema: ChangedSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          setloading(true)
          const data = {                    
            newPassword: values.password,
          };
      
          const response = await axios.post("auth/reset-password", data);
      
          if (response.status === 200) {
        
            setUpdatePasswordSuccessfully(true); 
          } else {
            console.error("Password change failed:", response.message);
          }
        } catch (error) {
          console.error("Password change failed:", error);
        } finally {
          setloading(false)
        } 
      }
    });
  return (
     <div className="w-[599px] h-[650px] flex flex-col items-center  justify-center  gap-10  rounded-[19px] border-[0.8px] bg-[#000000] relative z-10">
          <img src={Update} alt="orange_logo" className="w-[148.4px] " />
          <div className="w-auto flex flex-col  justify-center items-center gap-1 ">
            <h2 className="text-[32px] font-[600] text-white">Verification</h2>
            <p className="text-[13px] font-[400] text-center  text-[#FFFFFF]">
            Welcome back! Enter your details to login
            </p>
          </div>
    
          <form
            onSubmit={(e) => {
              e.preventDefault();
           
              
            }}
            className="w-full md:w-[393px]  flex flex-col justify-start items-start gap-10"
          >
            <div className="w-full h-auto flex flex-col justify-start items-start   ">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
              <div
                className={`h-[49px] flex justify-start bg-[#000000]  items-start w-full relative border-[0.8px]  border-[#D9D9D9] rounded-t-[12px] ${
                  errors?.password && touched?.password
                    ? "border-red-500"
                    : "border-[#D9D9D9]"
                }`}
              >
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-[90%] h-full  bg-transparent rounded-t-[12px] placeholder:text-[#959393] outline-none text-[#FFFFFF] px-3 text-[16px] font-normal leading-[20.4px]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                  className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
                >
                  {isConfirmPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-700 text-sm font-medium">
                  {errors.password}
                </p>
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
                  id="confirmpassword"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-[90%] h-full  bg-transparent rounded-b-[12px] placeholder:text-[#959393] outline-none text-[#FFFFFF] px-3 text-[16px] font-normal leading-[20.4px]"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="w-[10%] h-full rounded-r-[8px] bg-transparent text-md text-[#959393] flex items-center justify-center"
                >
                  {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              {errors.confirmpassword && touched.confirmpassword ? (
                <p className="text-red-700 text-sm font-medium">
                  {errors.confirmpassword}
                </p>
              ) : null}
            </div>
            </div>
    
            
    
            <button
              type="submit"
              onClick={() => setUpdatePasswordSuccessfully(true)}
              className="w-full h-[49px] rounded-[100px] btn-gradient text-white flex gap-2 items-center justify-center text-md font-medium"
            >
              <span>Reset Password</span>
              {loading && <FiLoader className="animate-spin text-lg " />}
            </button>
    
           
          </form>
          <UpdatePasswordSuccessfully />
        </div>
  );
}
