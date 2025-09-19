import { CiSearch } from "react-icons/ci";
import ReportList from "../../../components/app/reports/ReportList";


const Reports = () => {
    return (
    <div>
        <div className="flex items-center justify-between ">

        <h1 className="text-white text-[32px] font-[600]">Reports</h1>
        <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
        <CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
          <input type="text" placeholder="Search" className="text-[#565656] bg-transparent" />
        
        </div>
        </div>
        <ReportList />
    </div>
    );
};
export default Reports;
