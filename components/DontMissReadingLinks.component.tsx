import React from 'react'
import styles from './DontMissReadingLinks.module.css'
import axios from 'axios'
import Link from 'next/link'
const Wave = ({ color }:any) => (
  <svg
    id="visual"
    viewBox="0 0 900 150"
    width="200"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
  >
    <rect x="0" y="0" width="900" height="150" fill="#ffffff" />
    <path
      d="M0 133L21.5 127.7C43 122.3 86 111.7 128.8 111.3C171.7 111 214.3 121 257.2 120C300 119 343 107 385.8 103.8C428.7 100.7 471.3 106.3 514.2 110C557 113.7 600 115.3 642.8 120.5C685.7 125.7 728.3 134.3 771.2 131.3C814 128.3 857 113.7 878.5 106.3L900 99"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      stroke={`#${color}`}
      strokeWidth="40"
    />
  </svg>
);
const DontMissReadingLinks = async() => {
  const {homePageReading, homePageReading1,homePageReading2,homePageReading3,homePageReading4} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)).data
  const ids = [homePageReading1,homePageReading2,homePageReading3,homePageReading4]
  const post1:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${ids[0]}"}`)).data[0]
  const post2:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${ids[1]}"}`)).data[0]
  const post3:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${ids[2]}"}`)).data[0]
  const post4:Post = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${ids[3]}"}`)).data[0]
  const posts:Array<Post> = [post1, post2, post3, post4]
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          {homePageReading}
        </h1>
      </div>
      {posts.map((i) => (
        <Link href={`/article/${i.id}`} className={styles.article}>
          <h4>{i.topicName}</h4>
          <p>{i.title}</p>
          <Wave className={styles.wave} color={i.neonColor} />
        </Link>
      ))}
      <button className={styles.button}>
        Read more
      </button>
    </div>
  )
}
 
export default DontMissReadingLinks 