import { IoClose } from "react-icons/io5";
export default function CreateNotification({ setShowCreateNotification , showCreateNotification}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#00000017] w-[471px] h-[372px]  backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]  flex  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-between border-b-[2px] border-[#FFFFFF17] pb-2">
            <h1 className="text-[32px] font-[600] text-white">Create Notification</h1>
            <button onClick={() => setShowCreateNotification(!showCreateNotification)} className="text-[16px] font-[600] text-white"><IoClose /></button>
            </div>
            <form>
                <div className="flex flex-col gap-12">
                    
                    <textarea placeholder="Notification Description" className="bg-[#000000] rounded-[12px] p-2 h-[150px] border-[3px] border-[#FFFFFF17]"></textarea>
                    <button type="submit" className="bg-[linear-gradient(96deg,_#C01F37_10%,_#3D28D5_100%)] text-white px-4 py-2 rounded-[999px]">Create Notification</button>
                </div>
            </form>
           </div>
        </div>
        </div>
    )
}