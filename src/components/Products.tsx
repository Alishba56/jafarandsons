'use client'
import React, { useEffect, useState } from 'react'
import {TVSType} from '@/data/data'
import { getProducts } from '@/lib/getProducts';
import ProductCard from './ProductCard';
import Link from 'next/link';

const Products = ({tag}: any) => {
  const [TVS, setTVS] = useState<TVSType[]>()  
  // const [fav, setFav] = useState<number[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setTVS(data.message);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchData();
    
    // const Favorite = localStorage.getItem('favorite');
    // if (Favorite) {
    //   setFav(JSON.parse(Favorite));
    // }
  }, []);
  
  // useEffect(() => {  
  //   if(fav.length !== 0){
  //     localStorage.setItem('favorite', JSON.stringify(fav))
  //   }
  // }, [fav])
  
  // const Favorite = (id:number)=>{
  //   setFav([...fav, id])
  // }

  // const delFavorite = (id:number)=>{
  //   let favorite = fav.filter((faID)=> id !== faID) 
  //   setFav(favorite);      
  //   if(favorite.length === 0){
  //     localStorage.removeItem('favorite');
  //   }
  // }

  return (
    <div className="bg-white">
      <div className=" max-w-7xl mx-auto py-8">
        {TVS ? (
          <div className="flex flex-wrap justify-center gap-8 px-4 max-w-[1200px] mx-auto place-items-center">
            {TVS.filter((item) => item.tags.includes(tag)).map((product, idx) => 
              
             idx <= 2 &&  <ProductCard product={product} key={idx}/>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-500">Loading products...</p>
          </div>
        )}
        
            <div className='flex justify-center my-8 '>
            <Link href={"/products"}>
            <button className='cursor-pointer hover:text-white hover:bg-black duration-300 py-3 w-40 border-[1.5px] border-black rounded-lg '>Show More</button>
            </Link>
            </div>
        
      </div>
    </div>
  )
}



export default Products