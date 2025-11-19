import React, { useEffect, useState } from "react"
import axios from "../../../axios";
import UserRequestList from "../../../components/app/request/UserReqestList";
import RequestDetailModal from "../../../components/app/request/RequestDetailModal";
import { LoaderIcon } from "react-hot-toast";
import UserTableSkeleton from "../../../components/app/request/UserTableSkeleton";
export default function UserRequest (){ 
const [userRequest , setUserRequest] = useState([]);
const [pagination , setPagination] = useState({});
const [loading , setLoading] = useState(false);
const [pageNo , setPageNo] = useState(1);
const [search , setSearch] = useState("");
const [status , setStatus] = useState("pending");
const [showRequestDetailModal , setShowRequestDetailModal] = useState(false);

const getUserRequest = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`/admin/withdraw?status=${status}&search=${search}&page=${pageNo}&limit=10`);
        setUserRequest(response?.data?.data);
        setPagination(response?.data?.pagination);
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}
useEffect(() => {
    getUserRequest();
}, [pageNo , search , status]);


    return (
        <div>
            <div>
                <h1 className="text-[32px] font-[600] text-white">Withdraw Request</h1>
            </div>
            {loading ? (
                <UserTableSkeleton/>
            ) : userRequest?.length > 0 ? (
                <UserRequestList userRequest={userRequest} setShowRequestDetailModal={setShowRequestDetailModal}/>
            ) : (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-400 text-lg">No requests found.</p>
                </div>
            )}
                
           
            <RequestDetailModal
            showRequestDetailModal={showRequestDetailModal}
            setShowRequestDetailModal={setShowRequestDetailModal}
           
            />
            
        </div>
    )
}