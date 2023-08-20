import React from 'react'
import styles from './Hero.module.css'
import Featured from './Featured.component'
import Recent from './Recent.component'
const Hero = () => {
  return (
    <div className={styles.Hero__container}>
      <Featured />
      <Recent />
    </div>
  )
}

export default Hero