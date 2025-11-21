"use client"
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Sidebar from './Sidebar';
import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import ResponsiveSearch from './ResponsiveSearch';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='flex justify-between pl-20 pr-7 py-2 h-26 items-center'>

      <div className="sm:hidden">
        <Sidebar />
      </div>


      <Link href={'/'}>
        <h1 className='font-semibold text-xl'>JAFAR & SONS</h1>
      </Link>
<div className='flex gap-6'>
      <div 
        onClick={()=>setShowSearch(true)} 
        className='hidden cursor-pointer text-gray-700 items-center gap-1 sm:flex bg-gray-100 h-10 px-7 rounded-4xl'
      >
        <IoSearchSharp className='text-2xl'/>
        <p className='cursor-pointer outline-none w-32'> Search</p>
      </div>
      <ul className='flex justify-center items-center gap-6'>
      <li>
      <Link  href="/" 
      className="hidden sm:block text-xl">
        Home
      </Link>
      </li>
      <li>
      <Link  href="/products" 
      className="hidden sm:block  text-xl">
        Products
      </Link>
      </li>
      <li>
      <Link  href="/about" 
      className="hidden sm:block  text-xl">
        About
      </Link>
      </li>
        <li>
        <Link  href="/contact" 
        className="hidden sm:block  text-xl">
          Contact
        </Link>
        </li>
      </ul>
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
