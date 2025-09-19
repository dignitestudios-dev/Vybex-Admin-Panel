import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";


const UpdatePasswordSuccessfully = () => {
 const {updatePasswordSuccessfully, setUpdatePasswordSuccessfully} = useContext(AppContext);
const navigate=useNavigate();

  return (
    updatePasswordSuccessfully && (
      <div className="px-16 py-7 flex items-center justify-center bg-[#0A0A0A]  z-30 absolute border-[0.58px] border-[#D9D9D9] rounded-[23.32px] ">
       <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="w-full h-full flex flex-col items-center justify-center gap-1"><img src="" alt="" />
         <p className="text-[24px] font-[600] text-white">Password Created</p>
         <p className="text-[13px] font-[400] text-center  text-[#FFFFFF]">Your new password has been created</p></div>
         <div className="w-full flex items-end justify-end pt-2">
         <button onClick={() => {setUpdatePasswordSuccessfully(false); navigate("/auth/login")}} className="w-full  items-center justify-center text-md font-medium text-[#FFFFFF]">Done</button>
         </div>
       </div>
      </div>
    )
  );
};

export default UpdatePasswordSuccessfully;
