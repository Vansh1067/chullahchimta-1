import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './footer.module.css'
import Link from 'next/link'
const Footer=()=>{

    return ( <div className={styles.footer} id="contactus">
    <div className={styles.footerLogo}>
      <img width="300px" height="200px" src="/images/LOGO.svg" alt="Logo"/>
    </div>
 
    <div >
        <p className={styles.paraLink}><a href="#home">Home</a></p>
        <p className={styles.paraLink}><a href="#aboutus">About us</a></p>
        <p className={styles.paraLink}><a href="#contactus">Contact us</a></p>

    </div>
    <div >
       <p className={styles.paraLink}><a href="tel:917639639">+91-8273902926</a></p>
       <p className={styles.paraLink}><a href="tel:917639639">info@zuzinwok.com</a></p>

        <div className={styles.footerSocial}>
      
         <p className={styles.paraLink} style={{fontSize:'25px'}}><a href="tel:917639639">Follow us on</a></p>
           <Link href="https://www.instagram.com/chullahchimta/" ><p> <FontAwesomeIcon icon={faInstagram} color="#fff" style={{width:'30px',margin:'10px 20px',cursor:'pointer'}}/></p></Link>
          
        </div>
    </div>
   
  
</div>
)

}
export default Footer