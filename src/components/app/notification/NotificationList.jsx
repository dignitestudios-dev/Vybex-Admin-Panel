import React from 'react'
import { profiledark } from '../../../assets/export'
export default function NotificationList() {
    const sampleUsers = [
        {
          id: 1,
          Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          Time: '11:00pm',
          Date: 'July-4-1998',
          Status: 'Delivered',
        },
        {
          id: 2,
          Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          Time: '11:00pm',
          Date: 'Sep-9-1996',
          Status: 'Delivered',
        },
        {
          id: 3,
          Description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...',
          Time: '11:00pm',
          Date: 'Jan-21-1993',
          Status: 'Delivered',
       
        },
      ]
    return (
         <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
                     {/* Header */}
                     <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
                       <div className="flex-[1] shrink-0">#</div>
                       <div className="flex-[3]">Description</div>
                       <div className="flex-[1]">Time</div>
                       <div className="flex-[1]">Date</div>
                       <div className="flex-[1]">Status</div>
                       
                     </div>
               
                     {/* Rows */}
                     <div className="mt-2 divide-y divide-[#2E2E2E]">
                       {sampleUsers.map((u, idx) => (
                         <div
                           key={u.id ?? idx}
                           className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
                         >
                           <div className="flex-[1] shrink-0 text-sm md:text-base">{idx + 1}</div>
               
                           <div className="flex-[3] flex items-center gap-3 min-w-0">
                            
                            {u.Description}
                           </div>
               
                           <div className="flex-[1]  truncate ">
                             {u.Time}
                           </div>
               
                           <div className="flex-[1]  truncate">
                             {u.Date}
                           </div>
               
                           <div className="flex-[1]  truncate">
                             {u.Status}
                           </div>
               
                         
               
                           
                         </div>
                       ))}
                     </div>
                   </div>
    )
}