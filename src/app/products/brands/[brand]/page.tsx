import ProductCard from '@/components/ProductCard'
import { TVSType } from '@/data/data'
import { getProducts } from '@/lib/getProducts'
import Link from 'next/link'
import React from 'react'

const page = async({
    params,
  }: {
    params: Promise<{ brand: string }>
  }) => {
    const { brand } = await params
    const  data  = await getProducts()
    const message = data.message as TVSType[]
    const filteredProduct = message.filter((item) => item.brand === brand)

  return (
    <div className='min-h-screen max-w-7xl mx-auto p-10 '>
      <h2 className='text-center font-semibold text-4xl '>All Products of {brand.toUpperCase()} </h2>
      <div className=' justify-center flex flex-wrap sm:gap-3 gap-5 px-6 sm:px-0 mt-10'>
            {filteredProduct?.map((item, idx) => (
              <ProductCard product={item} key={idx} />
            ))}
          </div>
          <div className='flex justify-center items-center my-10'>
          <Link href={'/products'}>
        <button className='cursor-pointer hover:text-white hover:bg-black duration-300 py-3 w-40 border-[1.5px] border-black rounded-lg '>View All Products</button>
        </Link>
        </div>
    </div>
  )
}

export default page
