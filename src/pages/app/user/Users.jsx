import React, { useState, useEffect } from 'react'
import UsersList from '../../../components/app/users/UsersList'
import axios from '../../../axios'
import Pagination from '../../../components/global/Pagination';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [pagnition, setPagnition] = useState({});
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/admin/user?page=${pageNo}&limit=10`);
      setUsers(response.data?.data);
      setPagnition(response.data?.pagination);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getUsers();
  }, [pageNo]);
  console.log(pagnition,"pagnition");
  return (
    <div>
        <h1 className="text-white text-[32px] font-[600]">Users</h1>
      <UsersList users={users} />
      <div className="mt-4 flex justify-end">
      <Pagination pagnition={pagnition} setPageNo={setPageNo} />
      </div>
    </div>
  )
}

export default Users
