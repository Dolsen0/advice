'use client'
import styles from './page.module.css'
import GetAdvice from './GetAdvice'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
        <GetAdvice/>
       </div>
    </main>
    </>
  )
}
