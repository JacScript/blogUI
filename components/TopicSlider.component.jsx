import axios from 'axios'
import React from 'react'
import TopicSliderCard from './TopicSliderCard.component'
import styles from './TopicSlider.module.css'
import Slider from './Slider.component'
const TopicSlider = async() => {
    const {homePageTopic} = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchContent`)).data
    const posts = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"topicName":"${homePageTopic}"}`)).data

    return (
        <div className={styles.container}>
        <h1>{homePageTopic}</h1>
          {posts && posts.length > 1  && (<>
        <div className={styles.Topic__container1}>
          <Slider prev={1}>
            {posts.map((i) => (
              <div key={i.id} className='keen-slider__slide' style={{background: 'transparent', position:'relative' }}>
                <TopicSliderCard id={i.id} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.Topic__container2}>
          <Slider prev={2}>
            {posts.map((i) => (
              <div key={i.id} className='keen-slider__slide' style={{background: 'transparent', position:'relative' }}>
                <TopicSliderCard id={i.id} />
              </div>
            ))}
          </Slider>
        </div>
        <div  className={styles.Topic__container3}>
          <Slider prev={3}>
            {posts.map((i) => (
              <div key={i.id} className='keen-slider__slide' style={{background: 'transparent', position:'relative' }}>
                <TopicSliderCard id={i.id} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.Topic__container4}>
          <Slider prev={4}>
            {posts.map((i) => (
              <div key={i.id} className='keen-slider__slide' style={{background: 'transparent', position:'relative' }}>
                <TopicSliderCard id={i.id} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.Topic__container5}>
          <Slider prev={4}>
            {posts.map((i) => (
              <div key={i.id} className='keen-slider__slide' style={{background: 'transparent', position:'relative' }}>
                <TopicSliderCard id={i.id} />
              </div>
            ))}
          </Slider>
        </div>
        </>)}
      </div>
  )
}

export default TopicSlider