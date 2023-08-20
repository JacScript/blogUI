import React from 'react'
import styles from './PopularCard.module.css'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
const PopularCard = async ({id}:{id:string}) => {

  const post:Post = await(await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${id}"}`)).data[0]

  return (
    <Link style={{textDecoration:'none'}} href={`/article/${post.id}`} >
    <div className={`${styles.PopularCard__container} keen-slider__slide`} style={{background: `#${post.neonColor}`}}>
      <Image src={post.image1to1} alt={post.title} className={styles.image} fill style={{objectFit:'contain'}} />
      <div className={styles.InnerContainer}>
      {/* <div className={styles.PopularCard__background} style={{background: `#${post.neonColor}`}} ></div> */}
      <p className={styles.topic}>{post.topicName}</p>
      <div style={{width:'100%', background: 'rgba(173, 173, 173, 0.658)', height:'2px', margin:'5px 0'}}>
      </div>
      <h5 className={styles.title}>{post.title}</h5>
      <p className={styles.description}>{post.shortDesctiption}</p>
      </div>
    </div>
    </Link>
  )
}

export default PopularCard