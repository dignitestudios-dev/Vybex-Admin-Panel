import React from 'react'
import { profiledark } from '../../../assets/export'
import { dateFormate, timeFormat } from '../../../lib/helpers';
export default function NotificationList({notification}) {
    console.log(notification,"notification");
   
    return (
         <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
                     {/* Header */}
                     <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
                       <div className="flex-[1] shrink-0 w-[40px]">#</div>
                       <div className="flex-[1] ">Title</div>
                       <div className="flex-[3]">Description</div>
                       <div className="flex-[1]">Time</div>
                       <div className="flex-[1]">Date</div>
                     
                       
                     </div>
               
                     {/* Rows */}
                     <div className="mt-2 divide-y divide-[#2E2E2E]">
                       {notification?.map((u, idx) => (
                         <div
                           key={u.id ?? idx}
                           className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
                         >
                           <div className="flex-[1] shrink-0 w-[40px]">{idx + 1}</div>
                           <div className="flex-[1] flex items-center gap-3 min-w-0">
                            
                            {u.title}
                           </div>
                           <div className="flex-[3] flex items-center gap-3 min-w-0">
                            
                            {u.description}
                           </div>
               
                           <div className="flex-[1]  truncate ">
                             {timeFormat(u.createdAt)}
                           </div>
               
                           <div className="flex-[1]  truncate">
                             {dateFormate(u.createdAt)}
                           </div>
               
                          
               
                         
               
                           
                         </div>
                       ))}
                     </div>
                   </div>
    )
}