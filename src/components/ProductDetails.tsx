'use client'
import { TVSType } from '@/data/data'
import Image from 'next/image'
import React, { useState } from 'react'
import WishListComponent from './WishListComponent'
import ProductFeatures from './ProductFeatures'
import Link from 'next/link'
import CartButton from './CartButton'

const ProductDetails = ({product}: {product:TVSType}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  return (
    <>
    <div className='max-w-7xl mx-auto flex items-center '>
      <div className='flex gap-5 w-[550px]'>
        <div className='space-y-4'>
            {product.images.map((item, index) => (
                <Image src={item} onClick={()=>setSelectedImage(item)} alt='Product' height={100} width={100} key={index} className={` border border-gray-500 p-4 cursor-pointer ${item !== selectedImage && 'opacity-50'}`}/>
            ))}
        </div>
        <Image src={selectedImage} alt={product.title} height={400} width={400} className='object-contain'/>
      </div>
      <div className='space-y-5 w-[700px]'>
        <h3 className='font-bold text-3xl'>{product.title}</h3>
        <p className='text-gray-600 w-[80%]'>{product.description}</p>
        <h4 className='font-semibold text-2xl'>{product.discountedPrice} <span className='text-gray-400 line-through mx-2'>{product.price}</span></h4>
        <div className='flex gap-4'>
          {product.sizes?.map((size, index) => (
            <Link key={index} href={`/products/${size.slug}`}>
            <button  className={`${size.size !== product.currentSize && 'border-gray-300 text-gray-400'} cursor-pointer py-1 px-8 rounded-lg border `}>
              {size.size}
            </button>
            </Link>
          ))}
        </div>
        <div className='flex gap-5'>
        <WishListComponent id={product.id} from='ProductDetails' />
        <CartButton id={product.id.toString()} size={(product.currentSize as string)} price={(product.discountedPrice as string)}   />
        </div>
      </div>
    </div>
    <ProductFeatures product={product}/>
    </>
  )
}

export default ProductDetails
