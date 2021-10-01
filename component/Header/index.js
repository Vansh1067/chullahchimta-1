import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


import classes from './header.module.css'
const Header=()=>{
    const [menu,setMenu]=useState('home')
    const history=useRouter()
    useEffect(()=>{
        const path=history.asPath
        console.log(history)
        if(path=='/menu'){
            setMenu('menu')
        }
        /* else if(path=='/#home'){
            setMenu('home')
        }else if(path=='/menu'){
            setMenu('menu')
        }else if(path=='/#aboutus'){
            setMenu('aboutus')
        }else if(path=='/#contactus'){
            setMenu('contactus')
        } */
       
    },[history])
  
    return <div className={classes.header}>
        <div className={classes.logo}>
            <img width="250px" height="80px" src="/images/LOGO.svg" alt="Logo"/>
        </div>
        <div className={classes.menu}>
                <div className={classes.dotBox} onClick={()=>setMenu('home')}>
                    <p className={classes.item} > <Link href="/#home"  >Home</Link></p>
                    <div className={menu=='home'?classes.dot:classes.inactivedot}></div> 
                </div>
                <div className={classes.dotBox} onClick={()=>setMenu('menu')}>
                    <p className={classes.item}> <Link href="/menu"  >Menu</Link></p>
                    <div className={menu=='menu'?classes.dot:classes.inactivedot}></div> 
                </div>
                <div className={classes.dotBox} onClick={()=>setMenu('aboutus')}>
                    <p className={classes.item}><Link href="/#aboutus" >About us</Link></p>
                     <div className={menu=='aboutus'?classes.dot:classes.inactivedot}></div> 
               
                </div>
                <div className={classes.dotBox} onClick={()=>setMenu('contactus')}>
                    <p className={classes.item}><Link href="/#contactus" >Contact us</Link></p>
                     <div className={menu=='contactus'?classes.dot:classes.inactivedot}></div> 
                  
                </div>
                
                
        </div>
    </div>
}

export default Header