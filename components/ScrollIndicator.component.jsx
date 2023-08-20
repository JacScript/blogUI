"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion"

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll()

  return (
    <motion.path
    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
    style={{ pathLength: scrollYProgress, height:'10px', position: 'fixed', top:'5rem', zIndex:'2',  background:'red' }}
  />
  )
}

export default ScrollIndicator