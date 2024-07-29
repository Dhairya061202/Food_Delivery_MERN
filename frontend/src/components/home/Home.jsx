import React from 'react'
import '../../styles/home.css'
import { motion } from 'framer-motion'
import Menu from './Menu'
import data from '../../Data/data.json'

const Home = () => {

  return (
    <>
      <section className='home'>
      <div>
        <motion.h1 initial={{x:"-100%", opacity:0}} whileInView={{x:"0", opacity:1}}>Order Your favourite food</motion.h1>
        {/* <motion.p initial={{x:"-100%", opacity:0}} whileInView={{x:"0", opacity:1}} transition={{delay:0.2}}>Lorem ipsum dolor sit amet.</motion.p> */}
      </div>

      <motion.a initial={{y:"-100%",opacity:"0"}} whileInView={{y:0,opacity:1}} transition={{delay:0.4}} href="#menu">Explore Menu</motion.a>
    </section>

    <Menu data={data} />

    </>
    
  )
}

export default Home
