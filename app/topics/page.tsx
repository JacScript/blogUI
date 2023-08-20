import React from 'react'
import styles from './topicPage.module.css'
import Link from 'next/link'
const page = async() => {
    const topics = [{name:'Topic1', description:'qwefa'}, {name:'Topic2', description:'qwefa'}, {name:'Topic3', description:'qwefa'}, {name:'Topic4', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'}, {name:'Topic1', description:'qwefa'}, {name:'Topic2', description:'qwefa'}, {name:'Topic3', description:'qwefa'}, {name:'Topic4', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'}, {name:'Topic1', description:'qwefa'}, {name:'Topic2', description:'qwefa'}, {name:'Topic3', description:'qwefa'}, {name:'Topic4', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'},{name:'Topic1', description:'qwefa'}]
  return (
    <div className={styles.container}>
        <h1>Topics</h1>
        <div className={styles.grid}>
            {topics.map((i) => (
                <Link href={`/topic/${i.name}`}>{i.name}</Link>
            ))}
        </div>
    </div>
  )
}

export default page