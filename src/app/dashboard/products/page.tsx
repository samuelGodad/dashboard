import React from 'react';

import Search from "@/src/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/src/app/ui/dashboard/pagination/pagination";
import styles from "@/src/app/ui/dashboard/products/products.module.css";

function Products() {
    return (

        <div className = {styles.container}>
            <div className = {styles.top}>
                <Search placeholder = "search for users"/>
                <Link href = "/dashboard/products/add">
                    < button className = {styles.btn}>Add product</button>
                </Link>
            </div>
            <table className = {styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created AT</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className = {styles.products}>
                                <Image src = "/iphone 14.avif" alt = "profile" width = {40} height = {40}
                                       className = {styles.productImage}/>
                                iphone 14
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$3567</td>
                        <td>10.3.2024</td>
                        <td>60</td>
                        <td>
                            <div className = {styles.btns}>
                                < Link href = "/dashboard/products/edit">
                                    <button className = {`${styles.btn} ${styles.view}`}>view</button>
                                </Link>
                                <button className = {`${styles.btn} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className = {styles.products}>
                                <Image src = "/iphone 14.avif" alt = "profile" width = {40} height = {40}
                                       className = {styles.productImage}/>
                                iphone 14
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$3567</td>
                        <td>10.3.2024</td>
                        <td>60</td>
                        <td>
                            <div className = {styles.btns}>
                                < Link href = "/dashboard/products/edit">
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

export default Products;