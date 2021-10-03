import Head from 'next/head'


import Header from '../component/header'

import Footer from '../component/footer' 
import { useRouter } from 'next/router'

import Subscribe from '../component/subscribe'
import Loader from '../component/Loader'
import styles from '../styles/menu.module.css'
import { useState } from 'react'

export default function Home() {
  const router=useRouter()
  const [loading,setLoading]=useState(true)
  return (
    <div >
      <Head>
        <title>Chullah Chimta</title>
        <meta name="description" content="Your Favourite Food Delivered Hot &amp; Fresh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div className={styles.imageDiv}>
          {loading?<div className={styles.loaderDiv}><Loader/></div>: null}
          <img  src="/images/menu.jpg" onLoad={()=>setLoading(!loading)} width={loading?'0%':'100%'} />  
        
        </div>
       <Subscribe/>
       <Footer/>
      <p className={styles.copyright}>2021 ©  All Right Reserved</p>
    </div>
  )
}
