import React, { useState, useEffect } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { UserDetailHeader } from '../../../components/app/users/UserDetailHeader';
import ProfileCard from '../../../components/app/users/ProfileCard';
import axios from '../../../axios';
import { useParams } from 'react-router';

const UserDetail = () => {
    const navigate = useNavigate();
    const [userDetail,setUserDetail] = useState({});
    const [loading ,setLoading] = useState (false)
    const {id} = useParams()
    const getUserDetail = async () => {
        setLoading(true);
        
        try {
            const response = await axios.get(`/admin/user/${id}`);
            setUserDetail(response.data?.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    const blockUser = async () => {
        setLoading(true);
        try {
            const response = await axios.put(`/admin/report/${id} `,{
                status:"blocked"
            });
            console.log(response.data);
            getUserDetail();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    useEffect(() => {
        getUserDetail();
    }, []);

   
    return (
        <div>
            <div className='flex items-center justify-start gap-2'>
                <IoArrowBackSharp onClick={() => navigate("/users")} className="text-white w-[20px] h-[20px]" />
            <h1 className="text-white text-[32px] font-[600]">User Profile</h1>
            </div>
            <UserDetailHeader userDetail={userDetail} blockUser={blockUser}/>
            <ProfileCard  userDetail={userDetail} />
        </div>
    )
}

export default UserDetail
