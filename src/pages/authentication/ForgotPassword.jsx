import React, { useState } from "react";
import { useFormik } from "formik";

import { useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { loginImg, Verification } from "../../assets/export";
import { ForgotSchema } from "../../schema/authentication/authenticationSchema";
import { forgotValues } from "../../init/authentication/dummyLoginValues";
import { IoArrowBackSharp } from "react-icons/io5";




const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues: forgotValues,
          validationSchema: ForgotSchema,
          validateOnChange: true,
          validateOnBlur: true,
          onSubmit: async (values, action) => {
            const data = {
              email: values?.email,
              password: values?.password,
            };
        
    
            
          },
        });
return(
    <div className="w-full h-full flex flex-col items-center  justify-center  gap-10 p-20  rounded-[19px] border-[0.8px] bg-[#000000] ">
      <div className="w-full flex items-center justify-start cursor-pointer">
    <IoArrowBackSharp onClick={() => navigate("/auth/login")} className="text-white w-[24px] h-[24px]" />
    </div>
    <img src={Verification} alt="orange_logo" className="w-[148.4px] " />
    <div className="w-auto flex flex-col  justify-center items-center gap-1 ">
      <h2 className="text-[32px] font-[600] text-white">Verification</h2>
      <p className="text-[13px] font-[400] text-center  text-[#FFFFFF]">
      Enter your email and we'll send you an OTP to reset your password.
      </p>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
        navigate("/auth/verifyOtp");
      }}
      className="w-full md:w-[393px]  flex flex-col justify-start items-start gap-10"
    >
     
      <div className="w-full h-auto flex flex-col justify-start items-start gap-1 ">
        <input
          type="text"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full h-[49px] border-[0.8px]  outline-none bg-[#000000]  rounded-[50px] placeholder:text-[#959393] text-[#262626] px-3 text-[16px] font-normal leading-[20.4px] ${
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

     
  

      

      <button
        type="submit"
        className="w-full h-[49px] rounded-[100px] btn-gradient text-white flex gap-2 items-center justify-center text-md font-medium"
      >
        <span>Send OTP</span>
        {loading && <FiLoader className="animate-spin text-lg " />}
      </button>

     
    </form>
   
  </div>
)
}
export default ForgotPassword
