import { profiledark } from "../../../assets/export";


const RevenueList = () => {
    const sampleUsers = [
        {
          id: 1,
          name: 'John Doe',
          Coins: 420,
          username: '@Padberg53',
          dob: 'July-4-1998',
          Price: 500,
        },
        {
          id: 2,
          name: 'Jane Smith',
          Coins: 420,
          username: '@jsmith',
          dob: 'Sep-9-1996',
          Price: 420,
        },
        {
          id: 3,
          name: 'Alex Carter',
          Coins: 420,
          username: '@acarter',
          dob: 'Jan-21-1993',
          Price: 980,
        },
      ]
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
           {sampleUsers.map((u, idx) => (
             <div
               key={u.id ?? idx}
               className="flex items-center text-white px-2 md:px-4 py-3 md:py-4 text-[14px] font-[400]"
             >
               <div className="w-[40px] text-base">{idx + 1}</div>
   
               <div className="flex-[1] flex items-center gap-3 min-w-0">
                 <img
                   src={profiledark}
                   alt={u.name}
                   className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                 />
                 <div className="truncate ">{u.name}</div>
               </div>
   
               <div className="flex-[1] truncate ">
                 {u.username}
               </div>
               <div className="flex-[1] truncate ">
                 {u.Coins}
               </div>
   
   
   
               <div className="flex-[1]  ">
                 {u.Price}
               </div>
   
               <div className="flex-[1]  truncate">
                 {u.dob}
               </div>
           
             </div>
           ))}
         </div>
       </div>
  );
};
export default RevenueList;