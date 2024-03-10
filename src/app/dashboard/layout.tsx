import React from 'react';
import Sidebar from "@/src/app/ui/dashboard/sidebar/sidbar";
import Navbar from "@/src/app/ui/dashboard/navbar/navbar";
import styles from "@/src/app/ui/dashboard/dashboard.module.css";
import Footer from "@/src/app/ui/dashboard/footer/footer";


// @ts-ignore
function Layout({children}) {
    return (
        <div className = {styles.container}>
            <div className = {styles.menu}>
                <Sidebar/>
            </div>
            <div className = {styles.content}>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;