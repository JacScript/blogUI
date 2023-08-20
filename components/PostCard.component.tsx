import axios from 'axios'
import React from 'react'
import styles from './PostCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = async({postId}:any) => {
  const post:Post = await (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${postId}"}`)).data[0]
  // console.log(post[0])
  return (
    <Link href={`/article/${postId}`} className={styles.PostCard__container}>
      <div className={styles.PostCard__imageContainer}>
        <Image  src={post.image1to1} fill alt={post.title}  />
      </div>
      <main className={styles.PostCard__text}>
        <p>{post.topicName}</p>
        <h2>{post.title}</h2>
      </main>
    </Link>
  )
}

export default PostCard