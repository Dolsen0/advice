'use client'
import styles from './page.module.css'
import GetAdvice from './GetAdvice'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap" rel="stylesheet" />
      </Head>

    <main className={styles.main}>
      <div className={styles.description}>
        <GetAdvice/>
       </div>
    </main>
    </>
  )
}
