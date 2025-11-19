import { CiSearch } from "react-icons/ci";
import RestrictedList from "../../../components/app/restricted/RestrictedList";
import Pagination from "../../../components/global/Pagination";
import { useEffect, useState } from "react";
import axios from "../../../axios";

import RestrictedSkeleton from "../../../components/app/restricted/RestrictedSkeleton";

export default function Restricted() {
    const [restricted, setRestricted] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [pagnition, setPagnition] = useState({});
    const [search, setSearch] = useState('');

    const getRestricted =async () =>{
        setLoading(true);
        try {
            const response = await axios.get(`/admin/restricted?search=${search}&page=${pageNo}&limit=10`);
            setRestricted(response?.data?.data);
            setPagnition(response?.data?.pagination);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const UnblockUser = async (id) => {
        setLoading(true);
        try {
            const response = await axios.put(`/admin/report/${id} `,{
                status:"active"
            });
            console.log(response.data);
            getRestricted();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    useEffect(() => {
        getRestricted();
    }, [pageNo,search]);
    console.log(restricted,"restricted");
    return (
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-white text-[32px] font-[600]">Restricted Users</h1>
            <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
            <CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
              <input type="text" placeholder="Search" className="text-[#FFFFFF] outline-none bg-transparent" onChange={(e) => setSearch(e.target.value)} />
            
            </div>
            </div>
            {loading ? (
                <RestrictedSkeleton/>
            ) : restricted?.length > 0 ? (
                <RestrictedList restricted={restricted} UnblockUser={UnblockUser}/>
            ) : (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-400 text-lg">No restricted users found.</p>
                </div>
            )}
            <div className="mt-4 flex justify-end">
            <Pagination pagnition={pagnition} setPageNo={setPageNo} />
            </div>
        </div>
    )
}