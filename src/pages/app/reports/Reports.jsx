import { CiSearch } from "react-icons/ci";
import ReportList from "../../../components/app/reports/ReportList";
import { useState, useEffect } from "react";
import axios from "../../../axios";
import Pagination from "../../../components/global/Pagination";
import { useNavigate } from "react-router";
import ReportsSkeleton from "../../../components/app/reports/ReportsSkeleton";


const Reports = () => {
  const [reports, setReports] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pagnition, setPagnition] = useState({});
  const [loading ,setLoading] = useState (false)
  const [search ,setSearch] = useState("")
  const navigate = useNavigate();
  const getReports = async () => {
    setLoading(true);
    try {

      const response = await axios.get(`/admin/report?page=${pageNo}&limit=10&search=${search}`);
      setReports(response?.data?.data);
      setPagnition(response.data.pagination);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
      };
  const blockUser = async (id) => {
    setLoading(true);
    try {
        const response = await axios.put(`/admin/report/${id} `,{
            status:"blocked"
        });
        console.log(response.data);
        getReports();
     
    } catch (error) {
        console.log(error);
      }
    setLoading(false);
}
  useEffect(() => {
    getReports();
  }, [pageNo ,search]);
    return (
    <div>
        <div className="flex items-center justify-between ">

        <h1 className="text-white text-[32px] font-[600]">Reports</h1>
        <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
        <CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
          <input type="text" placeholder="Search" className="text-[#ffffff] bg-transparent outline-none" onChange={(e) => setSearch(e.target.value)}/>
        
        </div>
        </div>
        {loading ? (
            <ReportsSkeleton/>
        ) : reports?.length > 0 ? (
            <ReportList reports={reports} blockUser={blockUser}/>
        ) : (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-400 text-lg">No reports found.</p>
            </div>
        )}
        <div className="mt-4 flex justify-end">
        <Pagination pagnition={pagnition} setPageNo={setPageNo} />
        </div>
    </div>
    );
};
export default Reports;
