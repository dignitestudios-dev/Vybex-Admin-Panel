import RevenueList from "../../../components/app/revenue/RevenueList";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "../../../axios";
import { useNavigate } from "react-router";
import Pagination from "../../../components/global/Pagination";
import RevenueSkeleton from "../../../components/app/revenue/ReveuneSkeleton";
const Revenue = () => {
  const [revenue, setRevenue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState('');
  const [pagnition, setPagnition] = useState({});
  const navigate = useNavigate();

  const getRevenue = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/admin/revenue?page=${pageNo}&limit=10&search=${search}`);

      setRevenue(response?.data?.data);
      setPagnition(response?.data?.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getCSV = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/admin/revenue/csv");
        console.log(response?.data?.data, "response");
       window.location.href = response?.data?.data?.location;

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRevenue();
  }, [pageNo,search]);

  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-white text-[32px] font-[600]">Revenue</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
            <CiSearch className=" text-[#565656] w-[24px] h-[24px]" />
            <input
              type="text"
              placeholder="Search"
              className="text-[#FFFFFF] outline-none bg-transparent"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="">
            <button onClick={getCSV} className="text-white text-[14px]  font-[500] px-4 py-2 rounded-[100px] bg-[linear-gradient(96deg,#C01F37_10%,_#3D28D5_100%)]">
              Export CSV
            </button>
          </div>
        </div>
      </div>
      {loading ? (
          <RevenueSkeleton/>
      ) : revenue?.length > 0 ? (
          <RevenueList revenue={revenue} />
      ) : (
          <div className="flex items-center justify-center h-64">
              <p className="text-gray-400 text-lg">No revenue data found.</p>
          </div>
      )}
      <div className="mt-4 flex justify-end">
      <Pagination pagnition={pagnition} setPageNo={setPageNo} />
      </div>
    </div>
  );
};
export default Revenue;
