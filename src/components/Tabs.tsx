'use client'
import React, { useState } from 'react'
import Products from './Products'

const Tabs = () => {
    const [tag, setTag] = useState('new arrival')
    const [activeButton, setActiveButton] = useState<number>(1);

  const handleClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };
  return (
    <div className="font-sans p-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <ul className="flex border-b border-gray-200 mb-6">
          <li
            onClick={()=> {setTag('new arrival'); handleClick(1)} }
            className={`tab text-gray-800 font-medium text-base text-center py-3 sm:px-6 cursor-pointer transition-all ${activeButton === 1 ? "border-b-2 border-black font-semibold" : ""}`}
          >
            New Arrival
          </li>
          <li
            onClick={()=> {setTag('best selling'); handleClick(2)} }
            className={`tab text-gray-800 font-medium text-base text-center py-3 px-6 cursor-pointer transition-all ${activeButton === 2 ? "border-b-2 border-black font-semibold" : ""}`}
          >
            Bestseller
          </li>
          <li
            onClick={()=> {setTag('top rated'); handleClick(3)} }
            className={`tab text-gray-800 font-medium text-base text-center py-3 sm:px-6 cursor-pointer transition-all ${activeButton === 3 ? "border-b-2 border-black font-semibold" : ""}`}
          >
            Featured Products
          </li>
        </ul>
        
        <Products tag={tag}/>
      </div>
    </div>
  )
}

export default Tabs