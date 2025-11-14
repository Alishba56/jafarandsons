import { TVSType } from '@/data/data'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const ProductFeatures = ({product}:{product:TVSType}) => {
    const [featuresNumber, setFeaturesNumber] = useState(5)
  return (
    <div className='bg-gray-100 min-h-60 mt-10 py-10'>
      <div className='bg-white max-w-7xl mx-auto rounded space-y-5 p-5 '>
        <h3 className='font-semibold text-3xl'>Details</h3>
        <p className='text-gray-700'>{product.description}</p>

        {product.features?.map((feature, index) => (
            index + 1 <= featuresNumber &&
            <div className='border-b flex justify-between items-center border-gray-300' key={index}>
                <h3 className='font-semibold'>{feature.key}</h3>
                <p className='text-gray-700'>{feature.value}</p>
            </div>
        ))}
        {(product.features?.length ?? 0) > featuresNumber &&
        <div className="flex justify-center">
          <button className='border py-2 px-6 rounded flex items-center gap-1 hover:bg-black hover:text-white cursor-pointer duration-300' onClick={()=> setFeaturesNumber(product.features?.length || 0)}>Show More <IoIosArrowDown className='text-xl'/></button>
        </div>}
      </div>
    </div>
  )
}

export default ProductFeatures
