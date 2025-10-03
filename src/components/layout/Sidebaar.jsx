import { NavLink, useLocation, useNavigate } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { IoArrowBackSharp } from "react-icons/io5";
import { logo, logout } from "../../assets/export";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Sidebaar = () => {
  const location = useLocation();
  
  const navigate = useNavigate();
  const { handleLogout } = useContext(AppContext);

  return (
    <div className="w-full h-full overflow-y-auto px-3 py-4 flex flex-col gap-20 justify-start items-start">
      <div className=" w-full  flex items-center justify-center">
    <img src={logo} alt="logo" className="w-[117px] h-[100px]" />
    </div>
    <div className="w-full flex flex-col px-8 gap-8   "> 
      {sidebarData?.map((sidebar) => {
        return (
          <NavLink
            key={sidebar?.link}
            className={({ isActive }) =>
              isActive ?   "text-white flex items-center justify-start gap-3" : "text-[#FFFFFF80] flex items-center justify-start gap-3"
            }
            to={sidebar?.link}
          >
           <img
              src={
                location?.pathname.includes(sidebar.link)
                  ? sidebar?.icondark
                  : sidebar?.iconlight
              }
              className="w-[20px] h-[20px] "
              alt=""
            />
            <span className="text-[16px] font-[500] ">{sidebar?.title}</span>
            
          </NavLink>
        );
      })}
    </div>
    <div className="w-full h-full flex items-end justify-start">

    <button onClick= {() => handleLogout() } className="w-full text-white text-[16px] py-2 flex items-center justify-center gap-2 rounded-[50px]  font-[500] bg-[#000000]"> <img src={logout} alt="logout" className="w-[20px] h-[20px] "/>
    Logout</button>
    </div>
    </div>
  );
};

export default Sidebaar;
