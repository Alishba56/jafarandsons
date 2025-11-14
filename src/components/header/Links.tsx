import {motion} from 'framer-motion'
import React from 'react'
const variants ={
  open: {
    transition:{
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
const itemVariants ={
  open: {
    y:0,
},
closed: {
    opacity: 0,
    y:50,
}
}
const Links = () => {
  const items = [{title:"Homepage", link:'s/'}, {title:"Products", link:'/products'}, {title:"Portfolio", link:'/'}, {title:"Contact", link:'c/'}, {title:"About", link:'a/'}]
  return (
    <motion.div className="flex flex-col justify-center h-[100%] items-center text-2xl" variants={variants}>{items.map(item =>(
      <motion.a href={`${item.link}`} key={item.link} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>{item.title}</motion.a>
    ))}</motion.div>
  )
}

export default Links