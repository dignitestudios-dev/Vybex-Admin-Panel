import { useContext } from "react";
import { admin } from "../../assets/export";
import { AppContext } from "../../context/AppContext";
import Cookies from "js-cookie";

const Navbar = () => {
  const user =JSON.parse(Cookies.get("user"));
  console.log(user, "user");
  return (
    <div className="w-full h-full px-4 flex justify-between items-center">
     

      <span className="  flex items-center px-1 justify-start gap-2">
        <img src={admin} alt="admin" className="w-[48px] h-[48px]"  />
        <p className="text-white text-[18px] font-[500]">Hi, {user?.name}</p>
      </span>
    </div>
  );
};

export default Navbar;
