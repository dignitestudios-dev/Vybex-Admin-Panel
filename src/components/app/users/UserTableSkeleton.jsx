export default function UserTableSkeleton() {
    return (
      <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
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
  
        {/* Skeleton Rows */}
        <div className="mt-2 divide-y divide-[#2E2E2E]">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center text-white px-2 md:px-4 py-3 md:py-4 text-[14px] font-[400]"
            >
              {/* Index */}
              <div className="w-[40px] shrink-0 text-gray-700">{idx + 1}</div>
  
              {/* Name */}
              <div className="flex-[2] flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1A1A1A]" />
                <div className="h-3 w-[90px] bg-[#1A1A1A] rounded" />
              </div>
  
              {/* Email */}
              <div className="flex-[3] truncate">
                <div className="h-3 w-[160px] bg-[#1A1A1A] rounded" />
              </div>
  
              {/* Username */}
              <div className="flex-[2] truncate">
                <div className="h-3 w-[120px] bg-[#1A1A1A] rounded" />
              </div>
  
              {/* DOB */}
              <div className="flex-[2] truncate">
                <div className="h-3 w-[90px] bg-[#1A1A1A] rounded" />
              </div>
  
              {/* Coins */}
              <div className="w-[80px] text-right">
                <div className="h-3 w-[40px] ml-auto bg-[#1A1A1A] rounded" />
              </div>
  
              {/* Action Button */}
              <div className="w-[140px] flex justify-end">
                <div className="h-[35px] w-[100px] rounded-full bg-[#1A1A1A]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  