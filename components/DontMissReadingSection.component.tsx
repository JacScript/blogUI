import React from 'react'
import styles from './DontMissReadingSection.module.css'
import DontMissReadingCard from './DontMissReadingCard.component'
import DontMissReadingLinks from './DontMissReadingLinks.component'
const DontMissReadingSection =  async() => {
  return (
    <div className={styles.container}>
      <DontMissReadingCard />
      <DontMissReadingLinks />
    </div>
  )
}

export default DontMissReadingSection