import NewsLetter from '@/components/NewsLetter.component'
import SearchPage from '@/components/SearchPage.component'
import axios from 'axios'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({params}:any) => {
    if(!params.q){
        notFound()
    }
    let q = params.q
    const posts = await (await ( axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/searchArticles?q=${q}`))).data
  return (<>
    <SearchPage query={q} posts={posts} />
    <NewsLetter />
    </>
  )
}

export default page