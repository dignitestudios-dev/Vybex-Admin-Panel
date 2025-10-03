import React, { createContext, useContext, useState } from "react";

import { useEffect } from "react";


import Cookies from "js-cookie";
import axios from "../axios";
import { useNavigate } from "react-router";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
  const navigate = useNavigate();
  const [updatePasswordSuccessfully, setUpdatePasswordSuccessfully] =useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(() => {
    const cookieData = Cookies.get("user");
    return cookieData ? (cookieData) : null;
  });



  const handleLogin = (data) => {
    Cookies.set("token", data?.data?.token);
    Cookies.set("user", JSON.stringify(data?.data?.user ));
    setToken(data?.data?.token);
    setUser(data?.data?.user);
 
    console.log(data,"data")

  };
   
  const handleLogout = async () => {
    try {
      const response = await axios.post("/auth/logout");
      Cookies.remove("token");
      Cookies.remove("user");
      setToken(null);
      setUser(null);
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  
  // Send fcm to backend:
  // const fetchToken = async () => {
  //   const token = await getFCMToken();
  //   const authToken = Cookies.get("token");
  //   if (!authToken) {
  //     ErrorToast("Un authorized | Please relogin.");
  //     navigate("/login");
  //   } else if (authToken && token) {
  //     const response = await axios.post(`/auth/updateFCM`, {
  //       fcmToken: token,
  //     });
  //   }

  // You can send this token to your server or use it as needed

  // onMessageListener()
  //   .then((payload) => {
  //     const data = JSON.parse(payload?.data?.data);
  //     let route = null;
  //     if (data?.type == "booking") {
  //       route = `/rental-tracking/${data?.booking?._id}`;
  //     } else if (data?.type == "product") {
  //       route = `/products/${data?.product?._id}`;
  //     } else if (data?.type == "chat") {
  //       route = `/messages/${data?.chatUser?.chatId}`;
  //     } else {
  //       // WarningToast("Can't route. Something went wrong.");
  //       return;
  //     }
  //     NotificationToast({
  //       title: payload.notification.title,
  //       message: payload.notification.body,
  //       route: route,
  //     });
  //   })
  //   .catch((err) => console.log("failed: ", err));

  const dummyVar = null;

  return (
    <AppContext.Provider
      value={{
        dummyVar,
        setUpdatePasswordSuccessfully,
        updatePasswordSuccessfully,
        token,
        setToken,
        handleLogin,
        user,
        handleLogout,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
