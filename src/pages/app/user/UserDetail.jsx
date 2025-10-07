import React, { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { UserDetailHeader } from "../../../components/app/users/UserDetailHeader";
import ProfileCard from "../../../components/app/users/ProfileCard";
import axios from "../../../axios";
import { useParams } from "react-router";
import { Chart, Chartcolor } from "../../../assets/export";
import ReportSuccessModal from "../../../components/app/users/ReportSuccessModal";

const UserDetail = () => {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const getUserDetail = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`/admin/user/${id}`);
      setUserDetail(response.data?.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const blockUser = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`/admin/report/${id} `, {
        status: "blocked",
      });
      console.log(response.data);
      setShowSuccess(true);
      // navigate("/users");
   
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUserDetail();
  }, []);
console.log(userDetail,"userDetail");
  return (
    <div>
      <div className="flex items-center justify-start gap-2">
        <IoArrowBackSharp
          onClick={() => navigate("/users")}
          className="text-white w-[20px] h-[20px]"
        />
        <h1 className="text-white text-[32px] font-[600]">User Profile</h1>
      </div>
      <UserDetailHeader userDetail={userDetail} blockUser={blockUser} showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
      <div className="flex items-center  justify-center gap-10 py-4">
        <div className=" w-full bg-[linear-gradient(96deg,rgba(91,12,38,1)_0%,rgba(31,9,108,1)_100%)] flex p-5 rounded-[15px] items-center justify-between">
          <div>
            <p className="font-500 text-[16px] text-[#FFFFFF]">Total Post</p>
            <p className="font-500 text-[24px] text-[#FFFFFF]">
              {userDetail?.posts}
            </p>
          </div>
          <div>
            <img src={Chart} className="w-16" alt="total user" />
          </div>
        </div>
        <div className=" w-full bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[15px]">
          <div className="bg-[#000000] backdrop-blur-[50px]  p-5 flex items-center justify-between rounded-[15px] ">
            <div>
              <p className="font-500 text-[16px] text-[#FFFFFF]">
                Total Revenue
              </p>
              <p className="font-500 text-[24px] text-[#FFFFFF]">
                ${userDetail?.revenue}
              </p>
            </div>
            <div>
              <img src={Chartcolor} className="w-16" alt="total user" />
            </div>
          </div>
        </div>
      </div>
      <ProfileCard userDetail={userDetail} />




    </div>
  );
};

export default UserDetail;
