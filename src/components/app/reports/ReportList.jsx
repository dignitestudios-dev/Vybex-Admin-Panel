import { useState } from 'react';
import { profilelight } from '../../../assets/export';
import { VscKebabVertical } from "react-icons/vsc";
const ReportList = () => {
    
const sampleUsers = [
    {
        id: 1,
        name: 'Alex Carter',
        reason: 'alex.carter@gmail.com',
        reporton: 'Post',
        date: 'Sep-9-1996',
      },
    {
        id: 2,
        name: 'John Doe',
        reason: 'john.doe@gmail.com',
        reporton: 'Post',
        date: 'Sep-9-1996',
      },
    {
      id: 3,
      name: 'Jane Smith',
      reason: 'jane.smith@gmail.com',
      reporton: 'Post',
      date: 'Sep-9-1996',
    },
  ]
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
       {/* Header */}
       <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[13px] font-[600]">
         <div className="w-[40px] shrink-0">#</div>
         <div className="flex-[3]">Name</div>
         <div className="flex-[3]">Reported user</div>
         <div className="flex-[3]">Reason</div>
         <div className="flex-[2]">Report on</div>
         <div className="flex-[2] ">Date</div>
         <div className="flex-[2] flex justify-end items-end">Action</div>
       </div>
 
       {/* Rows */}
       <div className="mt-2 divide-y divide-[#2E2E2E]">
         {sampleUsers.map((u, idx) => (
           <div
             key={u.id ?? idx}
             className="flex items-center text-white/90 px-2 md:px-4 py-3 md:py-4 relative"
           >
             <div className="w-[40px] shrink-0 text-sm md:text-base">{idx + 1}</div>
 
             <div className="flex-[3] flex items-center gap-3 min-w-0">
               <img
                 src={profilelight}
                 alt={u.name}
                 className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
               />
               <div className="truncate text-sm md:text-[15px] font-[500]">{u.name}</div>
             </div>
 
             <div className="flex-[3] flex items-center gap-3 min-w-0">
               <img
                 src={profilelight}
                 alt={u.name}
                 className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
               />
               <div className="truncate text-sm md:text-[15px] font-[500]">{u.name}</div>
             </div>
 
             <div className="flex-[3]  truncate">
               {u.reason}
             </div>
 
             <div className="flex-[2]  truncate">
               {u.reporton}
             </div>
 
             <div className="flex-[2] ">
               {u.date}
             </div>
 
             <div className="flex-[2] flex justify-end   ">
             
                <button
                 onClick={() => setShowDetails(idx)}
                 className=" bg-black p-2 rounded-full border border-[#2E2E2E] w-[40px] h-[40px] flex items-center justify-center"
                 
               > 
                <VscKebabVertical  className='bg-black '/>
               </button>
              </div>
              {showDetails === idx && (
                <div onClick={() => setShowDetails(null)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className=" flex flex-col gap-4 items-start bg-[#111111]  p-3 rounded-[15px] absolute right-10 top-36 border-[#2E2E2E] border-[1px]">
<button className=" text-white ">Delete Reported Post</button>
<button className=" text-white  ">Restrict User</button>
       </div>
       </div>
       )}
             </div>
        
         ))}
       </div>
       
     </div>

  );
};
export default ReportList;
