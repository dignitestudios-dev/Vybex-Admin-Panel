import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Opt } from "../../assets/export";
import { FaArrowLeftLong } from "react-icons/fa6";
import CountDown from "../../components/authentication/CountDown";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { SuccessToast } from "../../components/global/Toaster";
import Cookies from "js-cookie";
import { FiLoader } from "react-icons/fi";
import { IoArrowBackSharp } from "react-icons/io5";
export default function VerifyOtp() {
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputs = useRef([]);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(120);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const email=sessionStorage.getItem("email");

  // const handleRestart = () => {
  //   setSeconds(30);
  //   setIsActive(true);
  // };


  const verifyOtp = async () => {
    if (loading) return;

    const otpString = otp.join('');
    if (otpString.length !== 5) {
      ErrorToast('Please enter a 5-digit OTP');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/auth/verify-reset-otp',{
        email: email,
        otp: otpString,
      });

      if (response.data.success) {
        console.log(response?.data.data.token);
        Cookies.set("token", response?.data?.data?.token);
        SuccessToast('OTP verified successfully');
        navigate('/auth/changePassword');
      } else {
        ErrorToast('Invalid OTP. Please try again');
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
    setOtp(Array(5).fill(''));
  };




  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === otp.length) {
      setOtp(pastedData.split(""));
    }
    e.preventDefault();
  };
  // const handleRestart = async () => {
  //   try {
  //     // Send email for password reset
  //     const response = await axios.post(
  //       "/auth/send-reset-otp",
       
  //       {
  //         email:email,
  //       }
  //     );
     
  //     if (response?.status === 200) {
        
        
  //       SuccessToast(response?.data?.message);
  //       setSeconds(120);
  //       setIsActive(true);
  //      setOtp(Array(5).fill(''));
  //     }
  //     // Navigate to OTP verificatio
  //   } catch (error) {
  //     ErrorToast(
  //       error.response?.data?.message || "Failed to send reset email"
  //     );
  //   }
   
  // };
  return (
    <div className="w-full h-full flex flex-col items-center  justify-center  gap-10 p-20  rounded-[19px] border-[0.8px] bg-[#000000]">
         <div className="w-full flex items-center justify-start cursor-pointer">
             <IoArrowBackSharp onClick={() => navigate("/auth/login")} className="text-white w-[24px] h-[24px]" />
             </div>
       <img src={Opt} alt="orange_logo" className="w-[148.4px] " />
      
        <div className="w-auto flex flex-col  justify-center items-center gap-1 ">

          <h2 className="text-[24px] font-bold mx-auto leading-[36px] text-white">
            Verification
          </h2>
        <p className="font-normal text-[13px] leading-[19px] text-[#FFFFFF] text-center">
        Enter the OTP  sent to your email  n*******7@hotmail.com
        </p>
        </div>

        <form onSubmit={(e)=>{
          e.preventDefault();
         navigate("/auth/changePassword");
        }} className="w-full md:w-[393px]  flex flex-col justify-center items-center gap-7">
          <div className="w-full h-auto flex justify-center items-center gap-4">
            {otp.map((_, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  placeholder="_"
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-[50px] h-[50px] rounded-[50px] bg-transparent outline-none text-center border-[1px] border-[#F4F4F4] text-white text-2xl  flex items-center justify-center"
                />
              );
            })}
          </div>
         
          <button
            type="submit"
            className="w-full h-[49px] rounded-[100px] btn-gradient text-white flex gap-2 items-center justify-center text-md font-medium"
          >
            {loading ? <FiLoader size={20} className="animate-spin" /> : <span>Verify</span>}
          </button>
          <p className="font-normal text-[13px] flex gap-2 leading-[19px] text-[#FFFFFF]  mx-auto">
          Didn't get OTP?{" "}
            {isActive ? (
              < CountDown
                isActive={isActive}
                setIsActive={setIsActive}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            ) : (
              <button
                type="button"
              
                className="outline-none text-[13px] border-none text-[#199BD1] font-bold"
              >
                Resend Otp
              </button>
            )}
          </p>
        </form>
      </div>
   
  );
}
