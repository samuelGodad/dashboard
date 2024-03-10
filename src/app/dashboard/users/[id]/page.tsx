import React from 'react';
import styles from "@/src/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

function SingleUserPage() {
    // @ts-ignore
    return (
        <div className = {styles.container}>
            <div className = {styles.infoContainer}>
                <div className = {styles.imageContainer}>
                    <Image src = "/DSC_0095.jpg" fill alt = "profile"/>
                    Samuel Godad
                </div>
            </div>
            <div className = {styles.formContainer}>
                <label>username</label>
                <input placeholder = "username" type = "text" name = "username"/>
                <label>email</label>
                <input placeholder = "godadsamuel@gmail.com" type = "email" name = "email"/>
                <label>password</label>
                <input placeholder = "12345" type = "password" name = "password"/>
                <label>phone</label>
                <input placeholder = "0980117654" type = "phone" name = "phone"/>
                <label>Address</label>
                <textarea name = "address" id = "address" rows = "20" placeholder = "Address"></textarea>
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
            </div>
        </div>
    );
}

export default SingleUserPage;