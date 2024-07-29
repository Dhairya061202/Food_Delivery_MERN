import React from 'react'
import '../../styles/menu.css'
import { motion } from 'framer-motion'

const MenuCart = ({itemNum,foodSrc,price,title,handler}) => {
  return (
    <motion.div initial={{x:"-100%", opacity:0}} whileInView={{x:"0%", opacity:1}}  transition={{delay:0.2}} className='menu-cart'>
      <div></div>
      <main>
        <img src={foodSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>

        <button onClick={()=>handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  )
}

export default MenuCart
