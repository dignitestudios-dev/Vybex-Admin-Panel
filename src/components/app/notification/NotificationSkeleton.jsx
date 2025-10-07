const NotificationSkeleton = () => {
    const rows = Array(5).fill(null); // 5 fake rows for loading
  
    return (
      <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
          <div className="flex-[1] shrink-0 w-[40px]">#</div>
          <div className="flex-[1]">Title</div>
          <div className="flex-[3]">Description</div>
          <div className="flex-[1]">Time</div>
          <div className="flex-[1]">Date</div>
        </div>
  
        {/* Skeleton Rows */}
        <div className="mt-2 divide-y divide-[#2E2E2E]">
          {rows.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
            >
              {/* Index */}
              <div className="flex-[1] shrink-0 w-[40px]">
                <div className="h-4 w-4 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Title */}
              <div className="flex-[1] flex items-center gap-3 min-w-0">
                <div className="h-4 w-24 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Description */}
              <div className="flex-[3] flex items-center gap-3 min-w-0">
                <div className="h-4 w-full bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Time */}
              <div className="flex-[1]">
                <div className="h-4 w-16 bg-[#2E2E2E] rounded" />
              </div>
  
              {/* Date */}
              <div className="flex-[1]">
                <div className="h-4 w-20 bg-[#2E2E2E] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NotificationSkeleton;
  