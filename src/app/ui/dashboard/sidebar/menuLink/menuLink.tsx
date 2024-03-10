"use client";
import styles from './menuLink.module.css';
import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
// @ts-ignore
function MenuLink({item}) {
    const pathname = usePathname();
    return (
        <Link href ={item.path} className = {`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
            {item.icon}
            {item.title}
        </Link>
    );
}
export default MenuLink;