import React from 'react';
import styles from './sidebar.module.css';
// @ts-ignore
import {
    MdDashboard,
    MdPeople,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdAnalytics,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md';
import MenuLink from "@/src/app/ui/dashboard/sidebar/menuLink/menuLink";
// @ts-ignore

    const menuItems =[
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
                    path: "/users",
                    icon: <MdPeople/>,

                },
                {
                    title: "Products",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle/>,

                },
                {
                    title: 'Products',
                    path: "/dashboard/products",
                    icon: <MdShoppingBag/>,
                },
                {
                    title: "Transactions",
                    path: "dashboard/transactions",
                    icon: <MdAttachMoney/>,

                },
            ],
        },

                {
                    title:"Analytics",
                    list:[
                        {
                            title:"Revenue",
                            path:"/dashboard/revenue",
                            icon:<MdAnalytics/>
                            
                        },
                        {
                            title:"Team",
                            path:"/dashboard/team",
                            icon:<MdPeople/>,

                        },
                        
                    ],

                },
                {
                    title:"User",
                    list:[
                        {
                            title:"Setting",
                            path:"/dashboard/setting",
                            icon:<MdOutlineSettings/>,
                        },
                        {
                            title:"Help",
                            path:"/dashboard/help",
                            icon:<MdHelpCenter/>,
                        },

                    ],
                },
            ];
    // @ts-ignore
function Sidebar() {
    return (
        <div className={styles.container}>
            <div className ={styles.users}>
                <img className ={styles.userImage} src = "/DSC_0095.jpg" alt = "profile" />
                <div className = {styles.userDetail}>
                    <span className = {styles.username}>Sami Go</span>
                    <span className = {styles.userTitle}>Administration</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat)=>
                    <li key ={cat.title}>
                        <span className ={styles.cat}>
                            {cat.title}
                        </span>
                        {cat.list.map(item=>(
                            <MenuLink item ={item} key ={item.title}></MenuLink>
                            ))}
                    </li>
                )}
            </ul>
            <button className={styles.logout}>
                <MdLogout/>
                <span>Logout</span>

            </button>
        </div>
    );

}
export default Sidebar;