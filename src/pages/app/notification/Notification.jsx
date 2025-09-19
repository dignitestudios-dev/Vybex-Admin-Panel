import { FaCirclePlus } from "react-icons/fa6";
import NotificationList from "../../../components/app/notification/NotificationList";
import CreateNotification from "../../../components/app/notification/CreateNotification";
import { useState } from "react";

export default function Notification() {
    const [showCreateNotification, setShowCreateNotification] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-[600] text-white">Notification</h1>
            <div className="flex items-center gap-2 bg-[linear-gradient(96deg,_#C01F37_10%,_#3D28D5_100%)] px-4 py-2 rounded-[999px]">
            <FaCirclePlus className="text-[20px] text-white" />
                <button className="text-[16px] font-[600] text-white " onClick={() => setShowCreateNotification(!showCreateNotification)}>Create new Notification</button>
                
            </div>
            </div>
            <NotificationList />
            {showCreateNotification ? <CreateNotification setShowCreateNotification={setShowCreateNotification} showCreateNotification={showCreateNotification}  /> : null}
        </div>
    )
}