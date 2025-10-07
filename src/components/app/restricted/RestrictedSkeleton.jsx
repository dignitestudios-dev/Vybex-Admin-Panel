
export default function RestrictedSkeleton () {
    return (
<div className="bg-[#000000] mt-3 backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] animate-pulse">
  {/* Header */}
  <div className="bg-[#1A1A1A] rounded-[12px] px-4 py-3 hidden md:flex text-white text-[14px] font-[400]">
    <div className="w-[40px] shrink-0">#</div>
    <div className="flex-[1]">User</div>
    <div className="flex-[2]">Reason</div>
    <div className="flex-[1]">Report on</div>
    <div className="flex-[1]">Dates</div>
    <div className="flex-[1]">Action</div>
  </div>

  {/* Skeleton Rows */}
  <div className="mt-2 divide-y divide-[#2E2E2E]">
    {[...Array(5)].map((_, idx) => (
      <div
        key={idx}
        className="flex items-center text-white text-[14px] font-[400] px-2 md:px-4 py-3 md:py-4"
      >
        {/* Index */}
        <div className="w-[40px] shrink-0 text-sm md:text-base text-gray-600">{idx + 1}</div>

        {/* User */}
        <div className="flex-[1] flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1A1A1A]" />
          <div className="h-3 w-[70px] bg-[#1A1A1A] rounded" />
        </div>

        {/* Reason */}
        <div className="flex-[2] truncate">
          <div className="h-3 w-[120px] bg-[#1A1A1A] rounded" />
        </div>

        {/* Report Type */}
        <div className="flex-[1] truncate">
          <div className="h-3 w-[80px] bg-[#1A1A1A] rounded" />
        </div>

        {/* Date */}
        <div className="flex-[1] truncate">
          <div className="h-3 w-[60px] bg-[#1A1A1A] rounded" />
        </div>

        {/* Action Button */}
        <div className="flex-[1] flex justify-end">
          <div className="h-8 w-[100px] bg-[#1A1A1A] rounded-[999px]" />
        </div>
      </div>
    ))}
  </div>
</div>


    );
}

