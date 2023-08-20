import axios from 'axios'
import React, { useState } from 'react'
import styles from './SearchPage.module.css'
import PostCard from './PostCard.component'
import Link from 'next/link'
import SearchBar from './SearchBar.component'
const SearchPage = ({query, posts}:any) => {
  return (
    <div className={styles.container}>
    <div className={styles.title}>
      <SearchBar query={query} />
    </div>
      <div className={styles.col}>
        {posts.map((i:Post) => (
          <PostCard postId={i.id} />
          ))}
      </div>
  </div>
  )
}

export default SearchPage