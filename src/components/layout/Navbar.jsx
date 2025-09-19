import { admin } from "../../assets/export";

const Navbar = () => {
  return (
    <div className="w-full h-full px-4 flex justify-between items-center">
     

      <span className="  flex items-center px-1 justify-start gap-2">
        <img src={admin} alt="admin" className="w-[48px] h-[48px]"  />
        <p className="text-white text-[18px] font-[500]">Hi, Admin</p>
      </span>
    </div>
  );
};

export default Navbar;
