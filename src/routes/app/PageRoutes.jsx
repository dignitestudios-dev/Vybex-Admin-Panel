import DashBoard from "../../pages/app/dashboard/DashBoard";
import Notification from "../../pages/app/notification/Notification";
import Reports from "../../pages/app/reports/Reports";
import Restricted from "../../pages/app/restricted/Restricted";
import Revenue from "../../pages/app/revenue/Revenue";
import UserDetail from "../../pages/app/user/UserDetail";
import Users from "../../pages/app/user/Users";



export const pageRoutes = [
    {
        url: "dashboard",
        page: DashBoard,
        name: "Dashboard"
    },
    {
        url: "users",
        page: Users,
        name: "Users"
    },
    {
        url: "users/:id",
        page: UserDetail,
        name: "User Detail"
    },
    {
        url: "revenue",
        page: Revenue,
        name: "Revenue"
    },
    {
        url: "reports",
        page: Reports,
        name: "Reports"
    },
    {
        url: "restricted",
        page: Restricted,
        name: "Restricted"
    },
    {
        url: "notification",
        page: Notification,
        name: "Notification"
    },
];