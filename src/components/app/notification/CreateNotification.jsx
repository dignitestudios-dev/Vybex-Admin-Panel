import { useFormik } from "formik";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { notificationValues } from "../../../init/app/App";
import { notificationSchema } from "../../../schema/app/AppSchema";
import axios from "../../../axios";
import toast from "react-hot-toast";
import { SuccessToast } from "../../global/Toaster";
export default function CreateNotification({
  setShowCreateNotification,
  showCreateNotification,
  getNotification,
}) {
  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: notificationValues,
    validationSchema: notificationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
        const data = {title: values.title, description: values.detail};
      try {
        const response = await axios.post("/admin/notification", data);
        if (response.status === 200) {
            action.resetForm(); // Reset the form
            setShowCreateNotification(false);
           SuccessToast('Notification created successfully');
           getNotification();
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Modal
      isOpen={showCreateNotification}
      onClose={() => setShowCreateNotification(false)}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className=" rounded-2xl shadow-xl w-full max-w-[520px] p-6 outline-none relative"
    >
      <div className="w-full flex flex-col gap-4 bg-[#00000017] backdrop-blur-[50px] p-4 md:p-5 rounded-[15px]">
        <div className="flex items-center justify-between border-b-[2px] border-[#FFFFFF17] pb-2">
          <h1 className="text-[32px] font-[600] text-white">
            Create Notification
          </h1>
          <button
            onClick={() => setShowCreateNotification(!showCreateNotification)}
            className="text-[16px] font-[600] text-white"
          >
            <IoClose />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col gap-2">
            <input
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Notification Title"
              className="bg-[#000000] rounded-[12px] p-2 text-white border-[3px] border-[#FFFFFF17]"
            />
            <textarea
            id="detail"
            name="detail"
            value={values.detail}
            onChange={handleChange}
            onBlur={handleBlur}
              placeholder="Notification Description"
              className="bg-[#000000] rounded-[12px] p-2 h-[150px] text-white border-[3px] border-[#FFFFFF17]"
            />
            <button
              type="submit"
              className="bg-[linear-gradient(96deg,_#C01F37_10%,_#3D28D5_100%)] text-white px-4 py-2 rounded-[999px]"
            >
              Create Notification
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
