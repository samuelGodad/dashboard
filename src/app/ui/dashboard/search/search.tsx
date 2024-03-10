import React from 'react';
import styles from "@/src/app/ui/dashboard/search/search.module.css";
import {MdSearch} from "react-icons/md";

// @ts-ignore
function Search({placeholder}) {
    return (
        <div className = {styles.container}>
            <MdSearch className = {styles.icon}/>
            <input className = {styles.input} placeholder = {placeholder}/>
        </div>
    );
}

export default Search;