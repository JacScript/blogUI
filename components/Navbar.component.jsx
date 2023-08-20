import React from 'react'
import styles from './Navbar.module.css'
import axios from 'axios'
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'
import NavMenu from './NavMenu.component'
import SearchBar from './SearchBar.component'

const Navbar = async () => {

    const topics = await ( await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADRESS}/fetchTopics`)).data
  return (
    <>
    <nav className={styles.navbar__container_mobile} >
        <div className={styles.navbar__mobile}>
            <Link style={{color:'#000', textDecoration:'none'}} href={'/'}>
            <h1>The Productive Hindu</h1>
            </Link>
            <div>
               <NavMenu />
            </div>
        </div>
        <div className={styles.navbar__topics_mobile}>
            {topics.map((i) => (
                <button key={i.id}>{i.name}</button>
            ))}
        </div>
    </nav>
  
    <nav className={styles.navbar__container} >
        <Link href='/' className={styles.navbar__logo}>
            <h1>The Productive Hindu</h1>
        </Link >
        <div className={styles.navbar__middle}>
            <SearchBar />
            <div className={styles.navbar__middle_topics}>
                {topics.map((i) => (
                    <button key={i.id}>{i.name}</button>
                ))}
            </div>
        </div>
        <div className={styles.navbar__buttons}>
           <Link href={'/topics'}>Topics</Link>
           <button>Advertise</button>
           <button>Books</button>
           <button>About</button>
           <button>Support us</button>
        </div>
    </nav>
    </>
  )
}




export default Navbar