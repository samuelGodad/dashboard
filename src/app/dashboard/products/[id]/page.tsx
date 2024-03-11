"use client";
import React, {useState} from 'react';
import styles from "@/src/app/ui/dashboard/products/singleProduct/singleUser.module.css";
import Image from "next/image";

function SingleProductPage() {
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
                iphone 14
            </div>
            <div className = {styles.formContainer}>
                <form action = "" className = {styles.form}>
                    <label>title</label>
                    <input type = "text" name = "title" placeholder = "samuel"/>
                    <label>price</label>
                    <input placeholder = "234$" type = "number" name = "price"/>
                    <label>stoke</label>
                    <input type = "number" name = "stock" palceholder = {43}/>
                    {/*<div className = {styles.icon}>*/}
                    {/*    <input type = {showPassword ? "text" : "password"} name = "password"*/}
                    {/*           autoComplete = "new-password"/>*/}
                    {/*    {showPassword ?*/}
                    {/*        <MdOutlineVisibility className = {styles.icons} onClick = {handleShowPassword}/> :*/}
                    {/*        <MdOutlineVisibility className = {styles.icons} onClick = {handleShowPassword}/>}*/}
                    {/*</div>*/}
                    <label>color</label>
                    <input placeholder = "color" type = "text" name = "color"/>
                    <label htmlFor = "">size</label>
                    <textarea name = "address" id = "address" rows = "{20}" placeholder = "Address"></textarea>
                    <label>Cat</label>
                    <select name = "Cat" id = "cat">
                        <option value = "kitchen">kitchens</option>
                        <option value = "computers">Computers</option>
                    </select>
                    <label>description</label>
                    <textarea name = "desc" id = "desc" rows = "{10}" placeholder = "description">

                    </textarea>
                    <button className = {styles.btn}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default SingleProductPage;