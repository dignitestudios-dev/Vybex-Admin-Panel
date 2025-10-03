import { FaCirclePlus } from "react-icons/fa6";
import NotificationList from "../../../components/app/notification/NotificationList";
import CreateNotification from "../../../components/app/notification/CreateNotification";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Pagination from "../../../components/global/Pagination";

export default function Notification() {
    const [showCreateNotification, setShowCreateNotification] = useState(false);
    const [notification, setNotification] = useState([]);
    const [pagnition, setPagnition] = useState({});
    const [pageNo, setPageNo] = useState(1);
    const getNotification = async () => {
        try {
            const response = await axios.get(`/admin/notification?page=${pageNo}&limit=10`);
            setNotification(response.data?.data);
            setPagnition(response.data?.pagination);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNotification();
    }, []);
    console.log(notification,"notification");
    return (
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-[600] text-white">Notification</h1>
            <div className="flex items-center gap-2 bg-[linear-gradient(96deg,_#C01F37_10%,_#3D28D5_100%)] px-4 py-2 rounded-[999px]">
            <FaCirclePlus className="text-[20px] text-white" />
                <button className="text-[16px] font-[600] text-white " onClick={() => setShowCreateNotification(!showCreateNotification)}>Create new Notification</button>
                
            </div>
            </div>
            <NotificationList notification={notification}/>
            <div className="mt-4 flex justify-end">
            <Pagination pagnition={pagnition} setPageNo={setPageNo} />
            </div>
            {showCreateNotification ? <CreateNotification setShowCreateNotification={setShowCreateNotification} showCreateNotification={showCreateNotification} getNotification={getNotification} /> : null}
        </div>
    )
}