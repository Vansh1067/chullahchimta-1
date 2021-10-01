import React from 'react'


/* import Button from '../Button' */
import styles from './aboutus.module.css'

const Aboutus=()=>{
    return (  <div className={styles.aboutus} id="aboutus">


    <div className={styles.video}>
        <img src="/video/video.gif" className={styles.videoplayer}/>
    </div>
    <div className={styles.aboutContent} >
         
        <p style={{fontSize:'30px',fontWeight:'bold',color:'#fff'}}>About Us</p>
        <div className={styles.line}></div>
        <p className={styles.heading}>Dedicated To Delight You</p>
        <div style={{marginBottom:'50px'}} >
        <p className={styles.para}>Orange is a multi-faceted color with different meanings in different cultures. The hue is quite prominent in Asian religions, and many monks and holy men wear orange robes.</p>
        <p className={styles.para}> According to Confucianism, orange is the color of transformation. The ancient Chinese associated color with harvests, happiness, wealth, and celebrations.  </p>
        <p className={styles.para}>Symbolically it’s connected to perfection and the highest state of illumination. It can also be intended to signify the quest for knowledge.</p>
        <p className={styles.para}>Zuzi and wok is intended to prepare food with authenticity. so that the food which goes in your stomach brings you happiness.</p>
        </div>
       {/*  <Button text="Learn More"/>  */}
       
    </div>
         
  </div>)
}


export default Aboutus