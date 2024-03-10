import React from 'react';
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css"
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "@/src/app/ui/dashboard/chart/chart";

function DashBoard() {
    return (
        <div className = {styles.wrapper}>
            <div className = {styles.main}>
                <div className = {styles.card}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className = {styles.side}>
                <RightBar/>
            </div>
        </div>
    );
}

export default DashBoard;