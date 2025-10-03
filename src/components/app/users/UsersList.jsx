

import { profilelight } from '../../../assets/export'
import { useNavigate } from 'react-router'

import { useState, useEffect } from 'react'
import { dateFormate } from '../../../lib/helpers';

// Div-based list (no table tags), styled to match dark UI in the screenshot
// Props: users?  Provide your own data or rely on sampleUsers fallback.
const UsersList = ({ users }) => {
    const navigate = useNavigate();
  console.log(users, "users");
  return (
    <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
      {/* Header */}
      <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[13px] font-[600]">
        <div className="w-[40px] shrink-0">#</div>
        <div className="flex-[2]">Name</div>
        <div className="flex-[3]">Email Address</div>
        <div className="flex-[2]">Username</div>
        <div className="flex-[2]">DOB</div>
        <div className="w-[80px] text-right">Coins</div>
        <div className="w-[140px] text-right pr-1">Action</div>
      </div>

      {/* Rows */}
      <div className="mt-2 divide-y divide-[#2E2E2E]">
        {users.map((u, idx) => (
          <div
            key={u.id ?? idx}
            className="flex items-center text-white px-2 md:px-4 py-3 md:py-4 text-[14px] font-[400]"
          >
            <div className="w-[40px] shrink-0 text-sm md:text-base">{idx + 1}</div>

            <div className="flex-[2] flex items-center gap-3 min-w-0">
              <img
                src={u.profilePicture
                }
                alt={u.name}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
              />
              <div className="truncate ">{u.name}</div>
            </div>

            <div className="flex-[3] truncate">
              {u.email}
            </div>

            <div className="flex-[2] truncate">
              {u.username}
            </div>

            <div className="flex-[2]  truncate">
              {dateFormate(u.dob)}
            </div>

            <div className="w-[80px] text-right ">
              {u.coins}
            </div>

            <div className="w-[140px] flex justify-end">
              <button
                onClick={() => navigate(`/users/${u._id}`)}
                className="text-white text-[12px] md:text-[13px] font-[600] px-4 py-2 rounded-[999px]"
                style={{
                  background:
                    'linear-gradient(96deg, #C01F37 10%, #3D28D5 100%)',
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default UsersList
