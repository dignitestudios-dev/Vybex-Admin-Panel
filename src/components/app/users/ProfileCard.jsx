import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function ProfileCard({userDetail}) {
  return (
    <div className="bg-black text-white rounded-lg border-[1px] border-[#EAEAEA4D] p-5 w-full ">
      {/* Full Name */}
      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">Full Name</p>
          <p className="text-[16px] font-[400]">{userDetail?.name}</p>
        </div>
    
      </div>

      {/* Email Address */}
      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">Email Address</p>
          <p className="text-[16px] font-[400]">{userDetail?.email}</p>
        </div>
      </div>

      {/* Username */}
      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">Username</p>
          <p className="text-[16px] font-[400]">John_Doe021</p>
        </div>
      </div>

      {/* Bio */}
      <div className="flex items-start py-3 border-b border-neutral-800">
        <div className="w-[80%]">
          <p className="text-[16px] font-[500] text-gray-400">Bio</p>
          <p className="text-[16px] font-[400] text-gray-300">
            {userDetail?.bio || "Not Available"}
          </p>
        </div>
       
      </div>

      {/* DOB */}
      <div className="flex items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">Date of Birth</p>
          <p className="text-[16px] font-[400]">{userDetail?.dob || "Not Available"} </p>
        </div>
    
      </div>

      {/* Social Media Links */}
      <div className="py-3">
        <p className="text-[16px] font-[500] text-gray-400    mb-2">Social media links</p>
        <div className="flex gap-3">
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[0.5px] rounded-full">
          <a className="flex items-center gap-1 px-3 py-1 bg-[#000000] rounded-full text-sm">
            <FaInstagram className="text-pink-500" /> Instagram
          </a>
          </div>
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[0.5px] rounded-full">
          <a className="flex items-center gap-1 px-3 py-1 bg-[#000000] rounded-full text-sm">
            <FaTwitter className="text-white" /> Twitter X
          </a>
          </div>
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[0.5px] rounded-full">
          <a className="flex items-center gap-1 px-3 py-1 bg-[#000000] rounded-full text-sm">
            <FaYoutube className="text-red-500" /> YouTube
          </a>
          </div>
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[0.5px] rounded-full">
          <a className="flex items-center gap-1 px-3 py-1 bg-[#000000] rounded-full text-sm">
            <FaTiktok className="text-white" /> TikTok
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
