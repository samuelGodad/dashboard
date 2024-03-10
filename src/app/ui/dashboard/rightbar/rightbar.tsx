import React from 'react';
import styles from './rightbar.module.css';
import Image from 'next/image';
import {MdPlayCircleFilled, MdReadMore} from "react-icons/md";

function RightBar() {
    return (
        <div className = {styles.container}>
            <div className = {styles.items}>
                <div className = {styles.bgContainer}>
                    <Image src = "/DSC_0095.jpg" alt = "background" fill className = {styles.image}/>
                </div>
                <div className = {styles.texts}>
                    <span className = {styles.notifications}>🔥 Available Now</span>
                    <h2 className = {styles.title}>How to use the new version of the admin</h2>
                    <span className = {styles.subtitle}>Takes 4 minute to learn</span>
                    <p className = {styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                        quam?</p>
                    <button className = {styles.btn}>
                        <MdPlayCircleFilled size = {20}/>
                        watch
                    </button>
                </div>
            </div>
            <div className = {styles.items}>
                <div className = {styles.texts}>
                    <span className = {styles.notifications}>🔥 Available Now</span>
                    <h2 className = {styles.title}>How to use the new version of the admin</h2>
                    <span className = {styles.subtitle}>Takes 4 minute to learn</span>
                    <p className = {styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                        quam?</p>
                    <button className = {styles.btn}>
                        <MdReadMore size = {20}/>
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightBar;