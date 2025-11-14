"use client"
import { TVSType } from '@/data/data';
import { getProducts } from '@/lib/getProducts';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const ResponsiveSearch = ({ open, close }: {open:boolean, close: ()=>void}) => {
    const [products, setProducts] = useState<TVSType[]>()
    const [searched, setSearched] = useState('')
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getProducts();
            setProducts(data.message);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        
        fetchData();
    },[])
  return (
    <div
      className={`fixed z-50 left-0 top-0 w-[100vw] pb-10 bg-white shadow-2xl px-5
        transform transition-all duration-700 ease-in-out
        ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0  pointer-events-none"}
      `}
    >
      <div className='flex border-b justify-center border-gray-300 h-20 items-center gap-2 text-3xl'>
        <IoSearchSharp/>
        <input 
          type="text" 
          className='outline-none w-[90%]'  
          placeholder='Search ' 
          onChange={(e)=> setSearched(e.target.value)}
          value={searched}
        />
        <RxCross2 
          onClick={close} 
          className='cursor-pointer'
        />
      </div>
      <h4 className='my-5 font-semibold text-xl'>Recommened</h4>
        {products ? (
  <div className="flex gap-5 overflow-scroll">
  
    {(() => {
      // Decide which products to show
      const filteredProducts = searched
        ? products.filter((item) =>
            item.title.toLowerCase().includes(searched.toLowerCase())
          )
        : products.filter((item) => item.tags.includes("recommened"));

      // Show "not found" message if search is active and no results
      if (searched && filteredProducts.length === 0) {
        return (
          <p className="text-gray-500 text-lg font-medium">
            Product not found
          </p>
        );
      }

      // Render the product cards
      return filteredProducts.map((product, idx) => (
        <Link onClick={()=>{close(); setSearched('')}} href={product.link} key={idx}>
          <div className="cursor-pointer space-y-1 w-60">
            <div className="bg-gray-100 h-60 w-60 flex justify-center items-center rounded-2xl">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain max-h-56 hover:scale-110 hover:duration-300 not-hover:duration-300"
              />
            </div>
            <h3 className="font-semibold text-xl">{product.title}</h3>
            <h5 className="text-xl font-semibold text-gray-500">
              {product.discountedPrice}
            </h5>
          </div>
        </Link>
      ));
    })()}
  </div>
) : (
  "Loading"
)}

        
    </div>
  )
}

export default ResponsiveSearch
