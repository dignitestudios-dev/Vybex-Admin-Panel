import React from 'react'
import { profiledark } from '../../../assets/export'
import { dateFormate } from '../../../lib/helpers'

export default function RestrictedList({restricted , UnblockUser}) {
     
    return (
        <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
             {/* Header */}
             <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
               <div className="w-[40px] shrink-0">#</div>
               <div className="flex-[1]">User</div>
               <div className="flex-[2]">Reason</div>
               <div className="flex-[1]">Report on</div>
               <div className="flex-[1]">Dates</div>
               
               <div className="flex-[1] ">Action</div>
             </div>
       
             {/* Rows */}
             <div className="mt-2 divide-y divide-[#2E2E2E]">
               {restricted.map((u, idx) => (
                 <div
                   key={u.id ?? idx}
                   className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
                 >
                   <div className="w-[40px] shrink-0 text-sm md:text-base">{idx + 1}</div>
       
                   <div className="flex-[1] flex items-center gap-3 min-w-0">
                     <img
                       src={u?.reportedUserData?.profilePicture}
                       alt={u?.reportedUserData?.name}
                       className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                     />
                     <div className="truncate ">{u?.reportedUserData?.name}</div>
                   </div>
       
                   <div className="flex-[2] truncate ">
                     {u?.reason || "No reason"}
                   </div>
       
                   <div className="flex-[1]  truncate">
                     {u.type}
                   </div>
       
                   <div className="flex-[1]  truncate">
                     {dateFormate(u.createdAt)}
                   </div>
       
                 
       
                   <div className=" flex-[1] ">
                     <button
                       onClick={() => UnblockUser?.(u.reportedUserData._id)}
                       className="text-white text-[14px] font-[400]    px-5 py-3 rounded-[999px]"
                       style={{
                         background:
                           'linear-gradient(96deg, #C01F37 10%, #3D28D5 100%)',
                       }}
                     >
                      Unblock
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
    )
}