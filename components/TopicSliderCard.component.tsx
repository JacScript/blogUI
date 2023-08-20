import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import styles from './TopicSliderCard.module.css'
import Link from 'next/link'
const TopicSliderCard = async ({id}:{id:string}) => {
    
    const post:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${id}"}`)).data[0]

   return (
    // <div className={styles.container}>
    //   {/* <div className={styles.imageContainer}>
    //     <Image src={post.imageWide} alt={post.title} fill objectFit='contain'  />
    //   </div>
    //   <div className={styles.textContainer}>
    //     <h2>{post.title}</h2>
    //   </div> */}
    // </div>
    <Link href={`/article/${post.id}`} className={styles.cardComponent}>
    <Image
      src={post.imageWide}
      alt="Product Image"
      width={500}
      height={300}
      layout="responsive"
      
      style={{objectFit:'cover', objectPosition:'center'}}
      objectPosition="center"
    />
    <h2 className={styles.title}>{post.title}</h2>
    </Link>
  )
}

export default TopicSliderCard