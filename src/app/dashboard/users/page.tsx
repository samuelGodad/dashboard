import React from 'react';
import styles from "@/src/app/ui/dashboard/users/users.module.css";
import Search from "@/src/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/src/app/ui/dashboard/pagination/pagination";


// @ts-ignore
function Users() {
    return (
        <div className = {styles.container}>
            <div className = {styles.top}>
                <Search placeholder = "search for users"/>
                <Link href = "/dashboard/users/add">
                    < button className = {styles.btn}>add user</button>
                </Link>
            </div>
            <table className = {styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created AT</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className = {styles.user}>
                                <Image src = "/DSC_0095.jpg" alt = "profile" width = {40} height = {40}
                                       className = {styles.userImage}/>
                                Sami Go
                            </div>
                        </td>
                        <td className = {styles.email}>godadsamuel@gmail.com</td>
                        <td className = {styles.date}>10.3.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className = {styles.btns}>
                                < Link href = "/dashboard/users/edit">
                                    <button className = {`${styles.btn} ${styles.view}`}>view</button>
                                </Link>
                                <button className = {`${styles.btn} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className = {styles.user}>
                                <Image src = "/DSC_0095.jpg" alt = "profile" width = {40} height = {40}
                                       className = {styles.userImage}/>
                                Sami Go
                            </div>
                        </td>
                        <td className = {styles.email}>godadsamuel@gmail.com</td>
                        <td className = {styles.date}>10.3.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className = {styles.btns}>
                                < Link href = "/dashboard/users/edit">
                                    <button className = {`${styles.btn} ${styles.view}`}>view</button>
                                </Link>
                                <button className = {`${styles.btn} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    );
}

export default Users;