import {
  home,
  homelight,
  notifications,
  notificationsdark,
  profiledark,
  profilelight,
  reports,
  reportsdark,
  Restricted,
  Restrictedark,
  revenue,
  revenuedark,
} from "../assets/export";

export const sidebarData = [
  {
    title: "Home",
    iconlight: homelight,
    icondark: home,
    link: "/dashboard",
  },
  {
    title: "Users",
    iconlight: profilelight,
    icondark: profiledark,

    link: "/users",
  },
  {
    title: "revenue",
    iconlight: revenue,
    icondark: revenuedark,
    link: "/revenue",
  },
  {
    title: "Reports",
    iconlight: reports,

    icondark: reportsdark,
    link: "/reports",
  },
  {
    title: "Restricted",
    iconlight: Restricted,
    icondark: Restrictedark,
    link: "/restricted",
  },
  {
    title: "Notifications",
    iconlight: notifications,

    icondark: notificationsdark,
    link: "/notification",
  },
  {
    title: "User Request",
    iconlight: notifications,

    icondark: notificationsdark,
    link: "/user-request",
  },
];
