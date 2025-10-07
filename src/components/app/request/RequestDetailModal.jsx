import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import axios from "../../../axios";
import toast from "react-hot-toast";
import { ErrorToast, SuccessToast } from "../../global/Toaster";
export default function RequestDetailModal({
    setShowRequestDetailModal,
    showRequestDetailModal,
  }) {
    console.log(showRequestDetailModal,"requestDetail");

    const handleApprove = async() => {
      try {
        const response =await axios.put(`/admin/withdraw/${showRequestDetailModal._id} `,{
          status:"approved"
        });

        console.log(response,"response");
      if(response?.data?.success){
        SuccessToast("Request Approved");
        setShowRequestDetailModal(false);
      }
      else{
        console.log(response,"response");
        ErrorToast(response?.data?.message  );
      }
      } catch (error) {
        console.log(error);
        ErrorToast(error?.response?.data?.message);
         setShowRequestDetailModal(false);
      }         
    }
    const handleReject = async() => {
      try {
        const response = await axios.put(`/admin/withdraw/${showRequestDetailModal._id}`,{
          status:"rejected"
        });
        console.log(response,"response");
      if(response?.data?.success){
        SuccessToast("Request Rejected");
        setShowRequestDetailModal(false);
      }
      else{
        ErrorToast(response?.data?.message );
      }
      } catch (error) {
        console.log(error);
        ErrorToast(error?.response?.data?.message);
        setShowRequestDetailModal(false);
      }        
    }

    return (
       <Modal
             isOpen={showRequestDetailModal}
             onClose={() => setShowRequestDetailModal(false)}
             overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
             className=" rounded-2xl shadow-xl w-full max-w-[520px] p-6 outline-none relative "
           >
        <div className="w-full flex flex-col gap-4 bg-[#00000017] backdrop-blur-[50px] p-4 md:p-5 rounded-[15px] border-[1px] border-[#FFFFFF17]">
        <div className="flex items-center justify-between border-b-[2px] border-[#FFFFFF17] pb-2">
          <h1 className="text-[32px] font-[600] text-white">
            Request Detail
          </h1>
          <button
            onClick={() => setShowRequestDetailModal(false)}
            className="text-[16px] font-[600] text-white"
          >
            <IoClose />
          </button>
        </div>
        <div className="flex items-center gap-2">
            <img src={showRequestDetailModal?.user
?.profilePicture} alt="" className="w-[80px] h-[80px] rounded-full" />
            <p className="text-[16px] font-[600] text-white">{showRequestDetailModal?.user?.name }</p>
        </div>    
<div className="flex flex-col">

        <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">bankName
          </p>
          <p className="text-[16px] font-[400] text-white">{showRequestDetailModal?.bank?.
bankName
}</p>
        </div>
    
      </div> 

      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">country

          </p>
          <p className="text-[16px] font-[400] text-white">{showRequestDetailModal?.bank?.country
          }</p>
        </div>
    
      </div> 

      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">currency

          </p>
          <p className="text-[16px] font-[400] text-white uppercase">{showRequestDetailModal?.bank?.currency}</p>
        </div>
    
      </div> 

      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">status

          </p>
          <p className="text-[16px] font-[400] text-white">{showRequestDetailModal?.bank?.status}</p>
        </div>
    
      </div> 

      <div className="flex  items-start py-3 border-b border-neutral-800">
        <div>
          <p className="text-[16px] font-[500] text-gray-400">price


          </p>
          <p className="text-[16px] font-[400] text-white">{showRequestDetailModal?.price}</p>
        </div>
    
      </div> 
</div>
<div className="w-full flex items-center justify-center gap-2">
  <button onClick={handleReject} className="w-full text-white text-[14px] font-[400]    px-5 py-3 rounded-[999px] bg-[#C01F37]">Reject</button>
  <button onClick={handleApprove} className= "w-full text-white text-[14px] font-[400]    px-5 py-3 rounded-[999px] bg-[#3D28D5]">Approve</button>
</div>
      </div>
        </Modal>
    )
}