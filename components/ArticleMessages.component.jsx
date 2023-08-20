import React from 'react'
import styles from './ArticleMessages.module.css'
import {BsCheck2Circle} from 'react-icons/bs'
import {BiSolidInfoCircle} from 'react-icons/bi'
import {AiFillWarning, AiFillCloseCircle,AiOutlineClose, AiOutlineCloseCircle} from 'react-icons/ai'
import Image from 'next/image'
const Info = ({title, content}) => {
  return (
    <div className={styles.containerBlue}>
        <div className={`${styles.iconBlue}`}>
            <BiSolidInfoCircle  size={40}  />
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}


// const wrongSvg = (
// <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
//  width="40.000000px" height="40.000000px" viewBox="0 0 800.000000 600.000000"
//  preserveAspectRatio="xMidYMid meet" fill="#fff" >

// <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
// fill="#a11616" stroke="none">
// <path d="M3735 5989 c-676 -55 -1334 -359 -1839 -848 -320 -311 -603 -764
// -743 -1190 -296 -904 -157 -1864 384 -2646 107 -155 192 -255 352 -415 238
// -237 480 -411 771 -556 430 -213 857 -314 1335 -314 1097 0 2103 605 2632
// 1580 565 1044 441 2366 -307 3285 -86 106 -77 104 -150 30 l-63 -64 55 -68
// c345 -424 559 -933 619 -1473 17 -149 17 -454 0 -600 -106 -950 -671 -1770
// -1516 -2200 -400 -204 -819 -304 -1275 -304 -618 0 -1187 189 -1688 562 -170
// 127 -426 384 -553 554 -247 333 -413 694 -498 1083 -50 230 -56 296 -56 610 1
// 324 11 417 71 664 122 496 371 937 734 1302 226 228 433 380 705 520 289 149
// 539 231 872 285 132 21 546 30 694 15 567 -60 1115 -292 1527 -649 l64 -55 66
// 67 67 67 -40 35 c-612 530 -1409 789 -2220 723z"/>
// <path d="M5327 4408 l-1329 -1321 -881 881 c-586 586 -889 882 -902 882 -11 0
// -31 -7 -43 -16 -55 -38 -80 -11 860 -951 l883 -883 -883 -883 c-932 -932 -910
// -908 -864 -950 46 -42 23 -63 954 862 l885 879 879 -879 c927 -928 905 -907
// 948 -863 44 43 65 20 -864 949 l-880 880 873 875 c1711 1717 1767 1773 1767
// 1801 0 30 -28 59 -56 59 -12 0 -507 -485 -1347 -1322z"/>
// </g>
// </svg>)

const Wrong = ({title, content}) => {
  return (
    <div className={styles.containerRed}>
        <div className={`${styles.iconRed}`}>
            {/* <AiFillCloseCircle  size={40}  /> */}
            {/* <AiOutlineClose  size={40}  /> */}
            <AiOutlineCloseCircle  size={40}  />
            {/* {wrongSvg} */}
        </div>
        {/* <div className={styles.blackdropRed}></div> */}
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}


const Img = ({src, alt}) => {
  return (
    <Image
      src={src}
      alt="alt"
      width={500}
      height={300}
      layout="responsive"
      
      style={{objectFit:'cover', objectPosition:'center'}}
      objectPosition="center"
    />
  )
}


const Warn = ({title, content}) => {
  return (
    <div className={styles.containerWarn}>
        <div className={`${styles.iconWarn}`}>
            <AiFillWarning  size={40}  />
        </div>
            <div className={styles.blackdrop}></div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>  )
}
const Green = ({title, content}) => {
  return (
    <div className={styles.containerGreen}>
        <div className={`${styles.iconGreen}`}>
            <BsCheck2Circle  size={40}  />
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>  )
}

export {Info, Warn, Green, Wrong, Img}