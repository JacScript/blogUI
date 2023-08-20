import ArticleDetailPage from '@/components/ArticleDetailPage.component'
import NewsLetter from '@/components/NewsLetter.component'
import ArticleDetailsReadMore from '@/components/ArticleDetailsReadMore.component'
import React from 'react'
import axios from 'axios'

const page = ({params}:any) => {

  return (
    <div>
      <ArticleDetailPage id={`${params.id}`} />
      <ArticleDetailsReadMore />
      <NewsLetter />
    </div>
  )
}

export default page