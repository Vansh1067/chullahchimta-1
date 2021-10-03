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
        <p className={styles.para}>The word “desi” has become a global buzzword. While this has certainly increased the worldwide consciousness around the Indian culture, we believe that it’s food that makes people instantly recognise, feel and connect with the culture. Therefore, we at chulha chimta have a purposive drive to accentuate this movement of “desi consciousness”.</p>
        <p className={styles.para}>Going back to the roots, our logo captures the age old tools and mechanics of cooking that world now seems to take interest lately. Chulha (stove) holds the pious driving force, the fire that effectuates the process of cooking. The chimta (tong) makes sure that the roti (bread) is cooked to perfection on the tawa (pan) so that it can be the perfect cradle to carry all complex flavours for your taste buds to cherish.</p>
        <p className={styles.para}>We invite you all to try the extensive yet simple cuisine offerings that will surely make you correspond with the desi roots.</p>

        </div>
       {/*  <Button text="Learn More"/>  */}
       
    </div>
         
  </div>)
}


export default Aboutus