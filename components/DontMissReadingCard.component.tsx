import React from 'react'
import styles from './DontMissReadingCard.module.css'
import axios from 'axios'
import Link from 'next/link'
const DontMissReadingCard = async() => {

    const {dontMissReadingArticleId} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)).data
    const post:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${dontMissReadingArticleId}"}`)).data[0]
    const color = post.color
  return (
    <Link href={`/article/${post.id}`} style={{background: `#${color}`}} className={styles.imageCard}>
    <div className={styles.imageContainer}>
      <img src={post.imageWide} alt={post.title} className={styles.image} />
    </div>
    <div className={styles.textContainer}>
      <p className={styles.topic}>{post.title}</p>
      <h2 className={styles.title}>{post.topicName}</h2>
    </div>
  </Link>
  )
}

export default DontMissReadingCard