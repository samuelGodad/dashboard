import React from 'react';
import styles from "@/src/app/ui/dashboard/products/addProducts/addProducts.module.css";

function AddProductPage() {
    return (
        <div className = {styles.container}>
            <form action = "" className = {styles.form}>
                <input placeholder = "title" type = "text" name = "title" required/>
                <select name = "cat" id = "cat">
                    <option value = "choose">Choose a Category</option>
                    <option value = "kitchen">kitchen</option>
                    <option value = "phone">phone</option>
                    <option value = "Computer">Computer</option>
                </select>
                <input type = "number" placeholder = "price" name = "price"/>
                <input type = "number" placeholder = "stocke" name = "stocke"/>
                <input type = "text" placeholder = "color" name = "color"/>
                <input type = "text" placeholder = "size" name = "size"/>
                <textarea name = "desc" id = "desc" rows = {20} placeholder = "description "></textarea>
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProductPage;