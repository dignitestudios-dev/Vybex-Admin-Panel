import React, { useState, useEffect } from 'react'
import UsersList from '../../../components/app/users/UsersList'
import axios from '../../../axios'
import Pagination from '../../../components/global/Pagination';
import { CiSearch } from 'react-icons/ci';
import UserTableSkeleton from '../../../components/app/users/UserTableSkeleton';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [pagnition, setPagnition] = useState({});
  const [search, setSearch] = useState('');
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/admin/user?page=${pageNo}&limit=10&search=${search}`);
      setUsers(response.data?.data);
      setPagnition(response.data?.pagination);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, [pageNo,search]);
  console.log(pagnition,"pagnition");
  return (
    <div>
      <div className="flex items-center justify-between">
        
        <h1 className="text-white text-[32px] font-[600]">Users</h1>
         <div className="flex items-center gap-2 bg-black py-3 px-3 rounded-[100px] drop-shadow-md">
                    <CiSearch  className=" text-[#565656] w-[24px] h-[24px]"/>
                      <input type="text" placeholder="Search" className="text-[#FFFFFF] outline-none bg-transparent" onChange={(e) => setSearch(e.target.value)} />
                    
                    </div>
      </div>
      {loading ? <UserTableSkeleton/> : ( <UsersList users={users} />)}
      <div className="mt-4 flex justify-end">
      <Pagination pagnition={pagnition} setPageNo={setPageNo} />
      </div>
    </div>
  )
}

export default Users
