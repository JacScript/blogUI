import React from 'react'
import styles from './Recent.module.css'
import PostCard from './PostCard.component'
import axios from 'axios'
const Recent = async() => {
  const posts:Array<Post> = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?limit=${4}`)).data
  const {homePageLatest} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`) ).data
  return (<>
    <div className={styles.Recent__container}>
    <h1>{homePageLatest}</h1>
    <div className={styles.Recent_cards}>
      {posts.map((i) => (<>
        <PostCard postId={i.id} />
        {/* <PostCard postId={i.id} />
        <PostCard postId={i.id} />
        <PostCard postId={i.id} /> */}
        </>))}
    </div>
    </div>
    </>
  )
}

export default Recent