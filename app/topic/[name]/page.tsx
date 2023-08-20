import NewsLetter from '@/components/NewsLetter.component'
import TopicPageContainer from '@/components/TopicPageContainer.component'
import axios from 'axios'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async({params}:any) => {
    const topic = await (await (axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchTopics?data={"name":"${params.name}"}`))).data[0]
    if(!topic){
        notFound()
    }
  return (
    <>
        <TopicPageContainer name={params.name} desc={topic.description} />
        <NewsLetter />
    </>
  )
}

export default page