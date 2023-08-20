import axios from 'axios'
import React from 'react'
import styles from './NewsLetter.module.css'
const NewsLetter = async() => {
    const {newsletterTitle, newsletterDescription, newsletterInputText, newsletterButton} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)).data
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{newsletterTitle}</h1>
        <p>{newsletterDescription}</p>
        <form >
          <div className={styles.Inputs}>
            <input className={styles.input} type='text' placeholder={newsletterInputText} />
            <button className={styles.submit}>{newsletterButton}</button>
            </div>
        </form>
    </div>
  )
}

export default NewsLetter