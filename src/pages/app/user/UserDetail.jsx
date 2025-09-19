import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { UserDetailHeader } from '../../../components/app/users/UserDetailHeader';
import ProfileCard from '../../../components/app/users/ProfileCard';

const UserDetail = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex items-center justify-start gap-2'>
                <IoArrowBackSharp onClick={() => navigate("/users")} className="text-white w-[20px] h-[20px]" />
            <h1 className="text-white text-[32px] font-[600]">User Profile</h1>
            </div>
            <UserDetailHeader/>
            <ProfileCard className=""/>
        </div>
    )
}

export default UserDetail
