import React from 'react'
import {Link} from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart,FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import '../../styles/header.css'
import {motion} from "framer-motion"



const Header = ({isAuthenticated=false}) => {
  return (
    <nav>
      
    <motion.div initial={{y:"-100%"}}
    whileInView={{y:"0"}} className='logo'>
      <IoFastFoodOutline />
      
    </motion.div>

    <div className='nav-links'>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>
      <Link to="/burger">Burger</Link>
      <Link to="/chinese">Chinese</Link>
      <Link to="/cart"><FiShoppingCart /></Link>

      <Link to={isAuthenticated? "/me":"/login"}>
        {isAuthenticated?<FaUser />: <FiLogIn />}
      </Link>

    </div>

    </nav>
  )
}

export default Header
