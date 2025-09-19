import RevenueList from "../../../components/app/revenue/RevenueList";
import { CiSearch } from "react-icons/ci";

const Revenue = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
     <h1 className="text-white text-[32px] font-[600]">Revenue</h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
<CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
  <input type="text" placeholder="Search" className="text-[#565656] bg-transparent" />

</div>
<div className="">
              <button
               
                className="text-white text-[14px]  font-[500] px-4 py-2 rounded-[100px] bg-[linear-gradient(96deg,#C01F37_10%,_#3D28D5_100%)]"
                
              >
               Export CSV
              </button>
            </div>
</div>
      </div>
     <RevenueList />
    </div>
  );
};
export default Revenue;