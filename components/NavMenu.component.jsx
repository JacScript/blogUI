"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import {AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import styles from './Navbar.module.css'
import Link from 'next/link'
const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isSearchOpen, setisSearchOpen] = useState(false)
    const variants = {
        open: { opacity: 1, y: 0,  },
        closed: { opacity: 0, y: "-100%" },
      }
      const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
      const searchVariants = {
        open: { opacity: 1, scaleX: 1  },
        closed: { opacity: 0,  scaleX:0 },
      }

  return (
    <>
    <motion.div initial={{ opacity: 0,  scaleX:0 }} transition={spring} animate={isSearchOpen ? "open" : "closed"} variants={searchVariants} className={styles.searchDiv}>
        <form>
        <input className={styles.searchBar} type='text' placeholder='search' />
        <button className={styles.searchButton} type='submit'>
        <AiOutlineSearch onClick={() => setisSearchOpen(true)} size={30} />  
        </button>
        </form>
    </motion.div>
    <AiOutlineSearch onClick={() => setisSearchOpen(!isSearchOpen)} size={30} />  
    <AiOutlineMenu style={{cursor: 'pointer'}} size={30} onClick={() => setIsOpen(isOpen => !isOpen)} />
    <motion.nav
    transition={spring}
    animate={isOpen ? "closed" : "open"}
    initial={ { opacity: 0, y: "-100%"}}
    variants={variants}
    className={styles.nav_mobileDrop}
    >
    <AiOutlineMenu className={styles.navOpenButton} size={30} onClick={() => setIsOpen(isOpen => !isOpen)} />
        <div >
            <input type='text' placeholder='search' />
            <Link href={'#'}>
                <AiOutlineSearch size={30} />
            </Link>
        </div>
        <button>Topics</button>
        <button>Advertise</button>
        <button>Books</button>
        <button>About</button>
        <button>Support us</button>
    </motion.nav>
    </>
  )
}

export default NavMenu