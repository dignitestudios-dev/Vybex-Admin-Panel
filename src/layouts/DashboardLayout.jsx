import { Outlet } from "react-router";
import DummyNavbar from "../components/layout/Navbar";
import DummySidebaar from "../components/layout/Sidebaar";
import { useEffect, useState } from "react";
import NoInternetModal from "../components/global/NoInternet";
import { NoInternetImage } from "../assets/export";
import Sidebaar from "../components/layout/Sidebaar";
import Navbar from "../components/layout/Navbar";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      // Handle no internet connection
      setOpenNoInternet(true);
    }
  }, []);
  return (
    <div className="w-screen h-screen flex justify-start bg-[#02010B] p-5 items-start overflow-hidden">
      <div
        className={`w-[284px] h-[calc(100%-1rem)] border-[1px] rounded-[10px] border-[#252530AB] bg-[#111111]   `}
      >
        <Sidebaar />
      </div>

      <div className="w-full h-full pl-5 space-y-3  ">
     <div className="w-full h-[100px] rounded-[10px]   items-center  bg-[linear-gradient(170deg,rgba(4,8,24,1)_42%,rgba(0,0,254,0.68)_73%)]">

        <Navbar />
     </div>
        <div className="w-full h-[calc(100%-8rem)] hidden-scrollbar overflow-y-auto bg-[#111111] rounded-[10px] p-5">

          <Outlet />
        </div>
          <NoInternetModal isOpen={openNoInternet} />

      </div>
    </div>
  );
};

export default DashboardLayout;
