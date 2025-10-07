const ReportsSkeleton = () => {
    const rows = Array(5).fill(null); // 5 fake rows dikhane ke liye
  
    return (
      <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[13px] font-[600]">
          <div className="w-[40px] shrink-0">#</div>
          <div className="flex-[3]">Name</div>
          <div className="flex-[3]">Reported user</div>
          <div className="flex-[3]">Reason</div>
          <div className="flex-[2]">Report on</div>
          <div className="flex-[2]">Date</div>
          <div className="flex-[2] flex justify-end items-end">Action</div>
        </div>
  
        {/* Skeleton Rows */}
        <div className="mt-2 divide-y divide-[#2E2E2E]">
          {rows.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center text-white/90 px-2 md:px-4 py-3 md:py-4"
            >
              {/* Index */}
              <div className="w-[40px] shrink-0">
                <div className="h-4 w-4 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Name */}
              <div className="flex-[3] flex items-center gap-3">
                <div className="w-9 h-9 bg-[#2E2E2E] rounded-full" />
                <div className="h-4 w-24 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Reported user */}
              <div className="flex-[3] flex items-center gap-3">
                <div className="w-9 h-9 bg-[#2E2E2E] rounded-full" />
                <div className="h-4 w-24 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Reason */}
              <div className="flex-[3]">
                <div className="h-4 w-32 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Report on */}
              <div className="flex-[2]">
                <div className="h-4 w-20 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Date */}
              <div className="flex-[2]">
                <div className="h-4 w-20 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Action */}
              <div className="flex-[2] flex justify-end">
                <div className="w-10 h-10 bg-[#2E2E2E] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReportsSkeleton;
  