import React from 'react'

import Image from 'next/image'
import { getProducts } from '@/lib/getProducts';
import Link from 'next/link';
import { TVSType } from '@/data/data';
import BrandTicker from '../silder';
import TopProducts from '../TopProducts';
const Hero = async() => {
  const TVS = await getProducts();
  const filteredProducts = TVS.message.filter((product:TVSType) => product.tags.includes('main'))[0];
  return (
    <section>
    <div className='bg-[#211C24] flex justify-evenly py-10 flex-wrap'>
        <div className=' mx-4 sm:mx-0 w-[500px] text-white flex flex-col justify-center items-start gap-7'>
            <h1 className='text-4xl font-semibold'>{filteredProducts.title}</h1>
            <h3 className='text-gray-400 text-2xl'>{filteredProducts.pickup[1]}</h3>
            <Link href={filteredProducts.link}>
            <button className='hover:text-black hover: hover:bg-white duration-300 cursor-pointer border-[1px] border-white py-4 px-14 rounded-md text-xl'>Buy Now</button>
            </Link>
        </div>
        <div>
            <Image src={filteredProducts.images[0]}  width={610} height={560} alt='' />
        </div>
    </div>
    {/* <BrandTicker className='mt-32'/> */}
    {/* <TopProducts/> */}
    </section>
  )
}

export default Hero