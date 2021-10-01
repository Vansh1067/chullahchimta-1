import React from "react";
import styles from './work.module.css'


const Work =()=>{
    return (<div className={styles.container}>
            <img src="/images/Takeaway.svg" className={styles.heading}/>
            <img src="/images/DeliveryIcon.svg" className={styles.deliveryIcon}/>
            <p className={styles.para}>Get Exclusive Discount on</p>
            <div className={styles.brands}>
                <img src="/images/Zomato.svg" className={styles.brandIcon}/>
                <img src="/images/Swiggy.svg" className={styles.brandIcon}/>

            </div>


    </div>)
}

export default Work