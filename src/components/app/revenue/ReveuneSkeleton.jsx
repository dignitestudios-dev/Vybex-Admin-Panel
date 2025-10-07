export default function RevenueSkeleton () {
    return (
        <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[500]">
          <div className="w-[40px] shrink-0">#</div>
          <div className="flex-[1]">Name</div>
          <div className="flex-[1]">Username</div>
          <div className="flex-[1]">Coins</div>
          <div className="flex-[1]">Price</div>
          <div className="flex-[1]">DOB</div>
        </div>
      
        {/* Skeleton Rows */}
        <div className="mt-2 divide-y divide-[#2E2E2E]">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center text-white px-2 md:px-4 py-3 md:py-4 text-[14px] font-[400]"
            >
              {/* Index */}
              <div className="w-[40px] text-base text-gray-700">{idx + 1}</div>
      
              {/* Name */}
              <div className="flex-[1] flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1A1A1A]" />
                <div className="h-3 w-[90px] bg-[#1A1A1A] rounded" />
              </div>
      
              {/* Username */}
              <div className="flex-[1] truncate">
                <div className="h-3 w-[110px] bg-[#1A1A1A] rounded" />
              </div>
      
              {/* Coins */}
              <div className="flex-[1] truncate">
                <div className="h-3 w-[60px] bg-[#1A1A1A] rounded" />
              </div>
      
              {/* Price */}
              <div className="flex-[1]">
                <div className="h-3 w-[70px] bg-[#1A1A1A] rounded" />
              </div>
      
              {/* DOB */}
              <div className="flex-[1] truncate">
                <div className="h-3 w-[90px] bg-[#1A1A1A] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
}