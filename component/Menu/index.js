import { useRouter } from "next/router";
import React  from "react";
import styles from './menu.module.css'

const Menu=()=>{
    const router=useRouter()
    return (<div className={styles.container}>
                <img src="/images/Menu.svg" className={styles.Heading}/>
                <img src="/images/arrow.svg" className={styles.arrow}/>
               <img src="/images/LOGO.svg"  onClick={()=>{router.push('/menu')}} className={styles.logo}/>

                <div className={styles.gallery}>
                <img src="/images/dish1.png" className={styles.galleryPic}/>
             <img src="/images/dish2.png" className={styles.galleryPic}/>
           

                

                <img src="/images/dish3.png" className={styles.galleryPic}/> 


                </div>
                <img src="/images/aunty.svg" className={styles.aunty}/> 
                <p className={styles.para}>Ghar Sa Swad</p>



    </div>)
}

export default Menu