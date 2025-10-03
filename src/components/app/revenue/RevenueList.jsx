import { profiledark } from "../../../assets/export";
import { dateFormate } from "../../../lib/helpers";


const RevenueList = ({revenue}) => {
 console.log(revenue,"revenue");
  return (
    <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
         {/* Header */}
         <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[500]">
           <div className="w-[40px] shrink-0">#</div>
           <div className="flex-[1]">Name</div>
           <div className="flex-[1]">Username</div>
           <div className="flex-[1]">Coins</div>
           <div className="flex-[1] ">Price</div>
           <div className="flex-[1]">DOB</div>
        
         </div>
   
         {/* Rows */}
         <div className="mt-2 divide-y divide-[#2E2E2E]">
           {revenue?.map((u, idx) => (
             <div
               key={u.id ?? idx}
               className="flex items-center text-white px-2 md:px-4 py-3 md:py-4 text-[14px] font-[400]"
             >
               <div className="w-[40px] text-base">{idx + 1}</div>
   
               <div className="flex-[1] flex items-center gap-3 min-w-0">
                 <img
                   src={u?.userProfilePicture}
                   alt={u?.name}
                   className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                 />
                 <div className="truncate ">{u?.userName}</div>
               </div>
   
               <div className="flex-[1] truncate ">
                 {u.userEmail}
               </div>
               <div className="flex-[1] truncate ">
                 {u.productQuantity}
               </div>
   
   
   
               <div className="flex-[1]  ">
                 {u.transactionPrice}
               </div>
   
               <div className="flex-[1]  truncate">
                 {dateFormate(u.purchaseDate)}
               </div>
           
             </div>
           ))}
         </div>
       </div>
  );
};
export default RevenueList;