"use client";
import React, {useState} from 'react';
import styles from "@/src/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import {MdOutlineVisibility} from "react-icons/md";

function SingleUserPage() {
    // @ts-ignore
    // @ts-ignore
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className = {styles.container}>
            <div className = {styles.infoContainer}>
                <div className = {styles.imageContainer}>
                    <Image src = "/DSC_0095.jpg" fill alt = "profile"/>
                </div>
                Samuel Godad
            </div>
            <div className = {styles.formContainer}>
                <form action = "" className = {styles.form}>
                    <label>username</label>
                    <input placeholder = "username" type = "text" name = "username"/>
                    <label>email</label>
                    <input placeholder = "godadsamuel@gmail.com" type = "email" name = "email"/>
                    <label>password</label>
                    <div className = {styles.icon}>
                        <input type = {showPassword ? "text" : "password"} name = "password"
                               autoComplete = "new-password"/>
                        <MdOutlineVisibility className = {styles.icons} onClick = {handleShowPassword}/>
                    </div>
                    <label>phone</label>
                    <input placeholder = "0980117654" type = "phone" name = "phone"/>
                    <label>Address</label>
                    <textarea name = "address" id = "address" rows = "{20}" placeholder = "Address"></textarea>
                    <label>Is Admin?</label>
                    <select name = "is admin" id = "is admin">
                        <option value = {false}>No</option>
                        <option value = {true}>Yes</option>
                    </select>
                    <label>Is Active?</label>
                    <select name = "is active" id = "is active">
                        <option value = {false}>No</option>
                        <option value = {true}>Yes</option>
                    </select>
                </form>
                <button className = {styles.btn}>Update</button>
            </div>
        </div>
    );
}

export default SingleUserPage;