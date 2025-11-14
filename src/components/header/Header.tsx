"use client"
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Sidebar from './Sidebar';
import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import ResponsiveSearch from './ResponsiveSearch';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false) // boolean

  return (
    <div className='flex justify-between pl-20 pr-7 py-2 h-26 items-center'>
      <Sidebar/>
      <Link href={'/'}>
        <h1 className='font-semibold text-xl'>JAFAR & SONS</h1>
      </Link>

      <div 
        onClick={()=>setShowSearch(true)} 
        className='hidden cursor-pointer text-gray-700 items-center gap-1 sm:flex bg-gray-100 h-10 px-3 rounded-4xl'
      >
        <IoSearchSharp className='text-2xl'/>
        <p className='cursor-pointer outline-none w-32'> Search</p>
      </div>

      <div className='flex text-xl gap-5'>
        <IoSearchSharp 
          className='block sm:hidden cursor-pointer' 
          onClick={()=>setShowSearch(true)}
        />
        <Link href={'/wishlist'}>
          <FaRegHeart/>
        </Link>
        <Link href={'/cart'}>
        <MdOutlineShoppingCart/>
        </Link>
      </div>

      <ResponsiveSearch open={showSearch} close={()=>setShowSearch(false)}/>
    </div>
  )
}

export default Header
