import React from 'react'
import styles from './Featured.module.css'
import axios from 'axios'
import { type } from 'os'
import Image from 'next/image'
import Link from 'next/link'


const getFeaturedPost = async() => {
  try{
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)
  const post:Array<Post> =await( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${data.featuredArticleId}"}`)).data
  return {article: post[0], featuredHeader:data.homePageFeatured}
  }catch(err){
    console.info(err)
    return
  }
}



const Featured = async () => {


  const {article, featuredHeader}:any = await getFeaturedPost()
  if(!article || !featuredHeader){
    return (<>
      Couldn&apost load data
    </>)
  }
  const Post:Post = article
  const color = `#${Post.color}`
  return (
    <Link href={`/article/${Post.id}`} style={{color:'black', textDecoration:'none'}} className={styles.Featured__container} >
      <h1>{featuredHeader}</h1>
      <div className={styles.Featured__imageContainer} style={{backgroundColor: color}}>
        <Image src={Post.image1to1} fill alt={Post.title}  />
      </div>
      <p>{Post.topicName}</p>
      <h2>{Post.title}</h2>
    </Link>
  )
}

export default Featured