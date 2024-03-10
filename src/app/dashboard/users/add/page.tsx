import React from 'react';
import styles from "@/src/app/ui/dashboard/users/addUser/addUser.module.css";

function AddUserPage() {
    return (
        <div className = {styles.container}>
            <form action = "" className = {styles.form}>
                <input placeholder = "username" type = "text" name = "username" required/>
                <input placeholder = "email" type = "email" name = "email" required/>
                <input placeholder = "password" type = "password" name = "password" required/>
                <input placeholder = "phone" type = "phone" name = "phone" required/>
                <select name = "Is Admin" id = "Is Admin">
                    <option value = {false} selected>Is Admin?</option>
                    <option value = {true}>Yes</option>
                    <option value = {false}>No</option>
                </select>
                <select name = "Is Active" id = "Is Active">
                    <option value = {false} selected>Is Active?</option>
                    <option value = {true}>Yes</option>
                    <option value = {false}>No</option>
                </select>
                <textarea name = "address" id = "address" rows = "20" placeholder = "Address"></textarea>
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUserPage;