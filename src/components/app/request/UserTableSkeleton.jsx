const UserTableSkeleton = () => {
    const rows = Array(5).fill(null); // 5 fake rows for loading
  
    return (
      <div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
          <div className="w-[40px] shrink-0">#</div>
          <div className="flex-[1]">User</div>
          <div className="flex-[1]">Email</div>
          <div className="flex-[1]">Price</div>
          <div className="flex-[1]">Dates</div>
          <div className="flex-[1]">Status</div>
          <div className="flex-[1]">Action</div>
        </div>
  
        {/* Skeleton Rows */}
        <div className="mt-2 divide-y divide-[#2E2E2E]">
          {rows.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
            >
              <div className="w-[40px] shrink-0 text-sm md:text-base">
                <div className="h-4 w-4 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1] flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#2E2E2E] rounded-full" />
                <div className="h-4 w-24 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1]">
                <div className="h-4 w-32 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1]">
                <div className="h-4 w-12 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1]">
                <div className="h-4 w-20 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1]">
                <div className="h-4 w-16 bg-[#2E2E2E] rounded" />
              </div>
  
              <div className="flex-[1]">
                <div className="h-[36px] w-[80px] bg-[#2E2E2E] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default UserTableSkeleton;
  