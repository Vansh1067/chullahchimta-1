import React from "react";
import styles from './subscribe.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Subscribe=()=>{
    return (<div className={styles.container}>
            <div >
                <p className={styles.heading}>Subscribe</p>
                <p className={styles.para}>To get notified when we launch the website.</p>
                <div className={styles.inputDiv}>
                <FontAwesomeIcon icon={faEnvelope} color="#262626"  className={styles.icon}/>
                <input className={styles.input} placeholder="yourmail@domain.com"/>
                </div>
                <p className={styles.condition}>*We'll never share your details with anyone else.</p>
                <button className={styles.button}>Submit</button>

            </div>
            <div className={styles.logoDiv}>
             <img width="300px" height="200px" src="/images/LOGO.svg" alt="Logo"/>
                
            </div>
    </div>)
}

export default Subscribe