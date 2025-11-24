"use client"
import Image from 'next/image'
import React from 'react'
import WishListComponent from './WishListComponent'
import { TVSType } from '@/data/data'
import Link from 'next/link'
import { motion } from "framer-motion"

const ProductCard = ({ product }: { product: TVSType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md 
        transition-shadow 
        w-full xs:w-[160px] sm:w-[260px] md:w-[300px]
         flex flex-col justify-between
      "
    >
      {/* Wishlist Icon */}
      <WishListComponent id={product.id} from='' />

      {/* Image Section */}
      <Link href={`/products/${product.slug}`} className="px-3 sm:px-6 flex justify-center items-center h-40  sm:h-56 md:h-60">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain h-[300px] w-[300px] "
        />
      </Link>

      {/* Info Section */}
      <div className="px-3 sm:px-4 pb-4 bg-gray-100 text-center">
        <Link href={`/products/${product.slug}`}>
        <h3 className="text-sm sm:text-md md:text-lg font-semibold text-gray-800 pb-2 line-clamp-2">
          {product.title}
        </h3>
        </Link>

        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
          {product.price}
        </p>

        <Link href={`/products/${product.slug}`}>
          <button className="cursor-pointer w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
            Buy Now
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
