import { CiSearch } from "react-icons/ci";
import ReportList from "../../../components/app/reports/ReportList";
import { useState, useEffect } from "react";
import axios from "../../../axios";
import Pagination from "../../../components/global/Pagination";


const Reports = () => {
  const [reports, setReports] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pagnition, setPagnition] = useState({});
  const getReports = async () => {
    try {
      const response = await axios.get(`/admin/report?page=${pageNo}&limit=10`);
      setReports(response?.data?.data);
      setPagnition(response.data.pagination);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getReports();
  }, [pageNo]);
    return (
    <div>
        <div className="flex items-center justify-between ">

        <h1 className="text-white text-[32px] font-[600]">Reports</h1>
        <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
        <CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
          <input type="text" placeholder="Search" className="text-[#565656] bg-transparent" />
        
        </div>
        </div>
        <ReportList reports={reports}/>
        <div className="mt-4 flex justify-end">
        <Pagination pagnition={pagnition} setPageNo={setPageNo} />
        </div>
    </div>
    );
};
export default Reports;
