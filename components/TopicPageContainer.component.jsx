import React from 'react'
import styles from './TopicPageContainer.module.css'
import axios from 'axios'
import PostCard from './PostCard.component'
const TopicPageContainer = async({name, desc}) => {
  let posts = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?limit=${10}&data={"topicName":"${name}"}`)).data  
  // const posts = [...postss, ...postss]
  console.log(posts)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
        <div className={styles.col}>
          {posts.map((i) => (
            <PostCard postId={i.id} />
            ))}
        </div>
    </div>
  )
}

export default TopicPageContainer