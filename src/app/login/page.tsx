"use client";
import React, {useState} from 'react';
import styles from "@/src/app/ui/login/loginPage.module.css";
import {MdOutlineVisibility, MdOutlineVisibilityOff} from "react-icons/md";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className = {styles.container}>
            <form className = {styles.form}>
                <h2>Login</h2>
                <input type = "text" placeholder = "username"/>
                <div className = {styles.icon}>
                    <input type = {showPassword ? "text" : "password"} autoComplete = "new-password"
                           placeholder = "password"/>
                    {showPassword ? <MdOutlineVisibility className = {styles.icons} onClick = {handleShowPassword}/> :
                        <MdOutlineVisibilityOff className = {styles.icons} onClick = {handleShowPassword}/>}
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;