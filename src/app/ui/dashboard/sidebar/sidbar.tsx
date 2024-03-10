import React from 'react';
import styles from './sidebar.module.css';
// @ts-ignore
import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard,
    MdHelpCenter,
    MdLogout,
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle,
    MdWork,
} from "react-icons/md";
import MenuLink from "@/src/app/ui/dashboard/sidebar/menuLink/menuLink";
// @ts-ignore

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney/>,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork/>,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics/>,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople/>,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings/>,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter/>,
            },
        ],
    },
];

// @ts-ignore
function Sidebar() {
    return (
        <div className = {styles.container}>
            <div className = {styles.users}>
                <img className = {styles.userImage} src = "/DSC_0095.jpg" alt = "profile"/>
                <div className = {styles.userDetail}>
                    <span className = {styles.username}>Sami Go</span>
                    <span className = {styles.userTitle}>Administration</span>
                </div>
            </div>
            <ul className = {styles.list}>
                {menuItems.map((cat) =>
                    <li key = {cat.title}>
                        <span className = {styles.cat}>
                            {cat.title}
                        </span>
                        {cat.list.map(item => (
                            <MenuLink item = {item} key = {item.title}></MenuLink>
                        ))}
                    </li>
                )}
            </ul>
            <button className = {styles.logout}>
                <MdLogout/>
                <span>Logout</span>
            </button>
        </div>
    );

}

export default Sidebar;