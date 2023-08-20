import React from 'react'
import styles from './PopularSlider.module.css'
import PopularCard from './PopularCard.component'
import axios from 'axios'
import Slider from './Slider.component'

const PopularSlider = async () => {
  const posts = await(await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles`)).data
  const {homePagePopular} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)).data
  return(
    <div className={styles.container}>
      <h1>{homePagePopular}</h1>
      <div className={styles.Popular__container1}>
        <Slider prev={1}>
          {posts.map((i) => (
            <div key={i.id} style={{background: 'transparent', position:'relative' }}>
              <PopularCard id={i.id} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.Popular__container2}>
        <Slider prev={2}>
          {posts.map((i) => (
            <div key={i.id} style={{background: 'transparent', position:'relative' }}>
              <PopularCard id={i.id} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.Popular__container3}>
        <Slider prev={3}>
          {posts.map((i) => (
            <div key={i.id} style={{background: 'transparent', position:'relative' }}>
              <PopularCard id={i.id} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.Popular__container4}>
        <Slider prev={4}>
          {posts.map((i) => (
            <div key={i.id} style={{background: 'transparent', position:'relative' }}>
              <PopularCard id={i.id} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )}


export default PopularSlider