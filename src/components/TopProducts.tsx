// import GetProducts from '@/data/GetProducts'
import { TVSType } from '@/data/data'
import { getProducts } from '@/lib/getProducts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const TopProducts = async() => {
  const TVS = await getProducts()
  const filteredProducts = TVS.message.filter((product:TVSType) => product.tags.includes('top product'))
  return (
    <div className='flex flex-col lg:flex-row w-[100%] max-w-7xl mx-auto'>
        <div className='w-[100%] lg:w-[49.5%] '>
            <Link href={filteredProducts[1].link}>
            <div className='cursor-pointer flex flex-col sm:flex-row items-center gap-2 sm:gap-8 '>
                <Image src={filteredProducts[1].images[0]} width={240} height={340} alt='' className='w-40 sm:w-60'/>
                <div>
                <h1 className='text-2xl sm:text-3xl font-semibold'>{filteredProducts[1].title}</h1>
                <h3>{filteredProducts[1].pickup[0]}</h3>
                </div>
            </div>
            </Link>
            <div className='flex flex-col sm:flex-row'>
              <Link href={filteredProducts[2].link} className='sm:w-[50%]'>
              <div className='px-2 justify-center flex items-center gap-8 py-4 bg-[#EDEDED]'>
                <Image src={filteredProducts[2].images[1]} width={128} height={128} alt='SamSung' className='w-32'/>
                <div>
                <h1 className='text-xl font-semibold'>{filteredProducts[2].title}</h1>
                <h3>{filteredProducts[2].pickup[0]}</h3>
                </div>
              </div>
              </Link>
              <Link href={filteredProducts[1].link} className='sm:w-[50%]'>
              <div className='px-2 flex  justify-center items-center h-full py-4 bg-[#353535] text-white'>
                <div>
                <h1 className='text-md font-semibold'>{filteredProducts[1].title}</h1>
                <h3>{filteredProducts[1].pickup[1]}</h3>
                </div>
                <Image src={filteredProducts[1].images[0]} width={128} height={128} alt='SamSung' className='w-32 '/>
              </div>
              </Link>
            </div>
        </div>
            <div className='py-5. flex flex-col-reverse sm:flex-row items-center justify-around pl-5 gap-6 w-[100%] lg:w-[49.8%]'>
              <div className='flex flex-col gap-5'>
              <h1 className='text-2xl font-semibold'>{filteredProducts[1].title}</h1>
              <h3>{filteredProducts[1].pickup[0]}</h3>
              <Link href={filteredProducts[1].link}>
              <button className='cursor-pointer hover:text-white hover:bg-black duration-300 py-3 w-40 border-[1.5px] border-black rounded-lg'>Shop Now</button>
              </Link>
              </div>
              <Image src={filteredProducts[1].images[0]} width={320} height={320} alt='' className='w-60 md:w-80'/>
            </div>
    </div>
    
  )
}

export default TopProducts