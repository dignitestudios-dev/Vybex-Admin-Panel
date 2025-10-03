import * as Yup from "yup";
export const notificationSchema = Yup.object({
    title: Yup.string().required("Notification title is required"),
    detail: Yup.string().required("Notification detail is required"),
  });