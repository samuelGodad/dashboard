import React from 'react';
import styles from './transaction.module.css';
import Image from 'next/image';

function Transactions() {
    return (
        <div className = {styles.container}>
            <h2 className = {styles.title}>Latest Transactions</h2>
            <table className = {styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        < td>Amount</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className = {styles.user}>
                                <Image src = "/DSC_0095.jpg" alt = "" width = {50} height = {50}
                                       className = {styles.userImage}/>
                                Sami Go
                            </div>
                        </td>
                        <td><span className = {styles.pending}>Pending</span></td>
                        <td>$100</td>
                        <td>12/12/2021</td>
                    </tr>
                    <tr>
                        <td>
                            <div className = {styles.user}>
                                <Image src = "/DSC_0095.jpg" alt = "" width = {50} height = {50}
                                       className = {styles.userImage}/>
                                Sami Go
                            </div>
                        </td>
                        <td><span className = {styles.done}>Done</span></td>
                        <td>$100</td>
                        <td>12/12/2021</td>
                    </tr>
                    <tr>
                        <td>
                            <div className = {styles.user}>
                                <Image src = "/DSC_0095.jpg" alt = "" width = {50} height = {50}
                                       className = {styles.userImage}/>
                                Sami Go
                            </div>
                        </td>
                        <td><span className = {styles.cancelled}>Cancelled</span></td>
                        <td>$100</td>
                        <td>12/12/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Transactions;