import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import styles from './ArticleDetailPage.module.css'
import {Info, Warn, Green, Wrong, Img} from './ArticleMessages.component'
import parse from 'react-html-parser'
import NewsLetter from './NewsLetter.component'
import ArticleDetailReadMore from './ArticleDetailsReadMore.component'
// const article = ({content}:any) => {
//     console.log(content)
//     return new Function(content)
// }
import ScrollIndicator from './ScrollIndicator.component'
import { notFound } from 'next/navigation'




const ArticleDetailPage = async({id}) => {

  const splitHtmlByComponents = (htmlString) => {
    const customComponentRegex = /<\/?(?:info|warn|green|wrong|img)[^>]*>/gi; // Regex for custom component tags
    const splitContent = htmlString.split(customComponentRegex);
    
    // Use the exec method to get an array of matches and their indices
    const matches = Array.from(htmlString.matchAll(customComponentRegex));
  
    // Combine the split content and the matched custom component tags
    const result = [];
    for (let i = 0; i < splitContent.length; i++) {
      result.push(splitContent[i]);
      if (i < matches.length) {
        result.push(matches[i][0]);
      }
    }
  
    return result;
  };
  const extractComponentProps = (components) => {
    const propsArray = components.map((component) => {
      const { title, content } = component.props;
      return {title: title, content:content};
    });
  
    return propsArray;
  };
  const extractImageProps = (components) => {
    const propsArray = components.map((component) => {
      const { src, alt } = component.props;
      return {src: src, alt:alt};
    });
  
    return propsArray;
  };
    const post= await (await (axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchArticles?data={"id":"${id}"}`))).data[0]
    if(!post){
      notFound()
    }
    const date = new Date(post.createdAt)
    // const content = article(post.content)
    // const content = new Function(``)
    // console.log(content)
  const jsxString = decodeURIComponent(post.content);
  const contentArray = splitHtmlByComponents(jsxString);
  let title, content;

  const handleParse = (i) => {
    if(i.startsWith('<Green')){
      let components = {...extractComponentProps(parse(i))}
      return <Green  key={1} title={components[0].title} content={components[0].content} />
    }else if(i.startsWith('<Info')){
      let components = {...extractComponentProps(parse(i))}
      return <Info  key={1}  title={components[0].title} content={components[0].content} />
    } if(i.startsWith('<Warn')){
      let components = {...extractComponentProps(parse(i))}
      return <Warn  key={1}  title={components[0].title} content={components[0].content} />
    }else if(i.startsWith('<Wrong')){
      let components = {...extractComponentProps(parse(i))}
      return <Wrong  key={1}  title={components[0].title} content={components[0].content} />
    }else if(i.startsWith('<Img')){
      let components = {...extractImageProps(parse(i))}
      return <Img  key={1}  src={components[0].src} alt={components[0].alt} />
    }else{
      return <div style={{whiteSpace: 'pre-wrap'}} key={1} dangerouslySetInnerHTML={{ __html: i }} />
    }

  }


    return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <div className={styles.mobile_top}>
          <h5>{post.topicName}</h5>
          <p>{date.toLocaleDateString()}</p>
        </div>
        <div className={styles.mobileImageContainer}>
        <Image
          src={post.imageWide}
          alt="Blog Post Image"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      <div className={styles.mobile_text_container}>
          <h1  >{post.title}</h1>
        </div>
      </div>
        <div className={styles.imageContainer}>
      <Image
        src={post.imageWide}
        alt="Blog Post Image"
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div className={styles.text_container}>
          <h5>{post.topicName}</h5>
          <h1 style={{color:`#${post.headerColor}`}} >{post.title}</h1>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </div>
      <div className={styles.overlay}>
        
      </div>
      <div className={styles.article}>
        <div className={styles.head}>
            <p className={styles.author}>{post.author}</p>
            <div className={styles.share}>share</div>
        </div>
        <div style={{whiteSpace: 'pre-wrap'}}  />
        {contentArray.map((i, index) => {
          return handleParse(i)
        })}
      </div>
    </div>

  )
}

export default ArticleDetailPage