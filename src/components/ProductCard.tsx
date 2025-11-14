import Image from 'next/image'
import React from 'react'
import WishListComponent from './WishListComponent'
import { TVSType } from '@/data/data'
import Link from 'next/link'
const ProductCard = ({product}:{product: TVSType}) => {
    
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[300px] sm:h-[400px] w-[150px] sm:w-[280px] flex flex-col justify-between">
                <WishListComponent id={product.id} from=''/>
                <div className="px-6 flex justify-center items-center h-56 ">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-56"
                  />
                </div>
                <div className="px-4 pb-6 bg-gray-100  text-center ">
                  <h3 className="sm:text-md font-semibold w-[99%]  text-gray-800 pb-2  line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-md sm:text-lg font-bold text-gray-900 mb-3">
                    {product.price}
                  </p>
                  <Link href={`/products/${product.slug}`}>
                  <button className="cursor-pointer w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                    Buy Now
                  </button>
                  </Link>
                </div>
              </div>
  )
}

export default ProductCard
