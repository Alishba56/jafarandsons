'use client'
import ProductCard from '@/components/ProductCard';
import { TVSType } from '@/data/data';
import { getProducts } from '@/lib/getProducts';
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [data, setData] = useState<TVSType[]>()
  const [IsOpen, setIsOpen] = useState('brands')
  const [IsFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    
      const fetchData = async () => {
        try {
          const data = await getProducts();
          setData(data.message);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      
      fetchData();
  }, [])
  const brands = [
    'Samsung',
    'LG',
    'TCL',
  ]
  const productsType = ['Sound System', 'TV', 'Washing Machine', 'Refrigerator', 'Smart Phones']
  const onClickFilter = (item:string) =>{
    if(selectedBrands.includes(item.toLowerCase())){
      const filteredItems = selectedBrands.filter((brand) => brand !== item.toLowerCase());
      setSelectedBrands(filteredItems);
      console.log(filteredItems, 1, item)

    }else{
      setSelectedBrands([...selectedBrands, item.toLowerCase()]);
      console.log(selectedBrands, 2, item)
    }
  }
  const filteredTVs =
  selectedBrands.length === 0
    ? data
    : data?.filter(item =>
        item.tags.some(tag => selectedBrands.includes(tag))
      );
  return (
    <div className='max-w-7xl mx-auto'>
      <h4 className='flex items-center gap-2 my-10'>Home <IoIosArrowForward/> Catalog</h4>
      <div className='flex gap-x-10'>
        <div className='shrink-0 w-[300px] hidden sm:block '>
          <h3 onClick={()=> setIsOpen(IsOpen === 'brands'? '':'brands')} className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>Brands {IsOpen === 'brands'? <IoIosArrowUp/> :<IoIosArrowDown/>} </h3>
          {IsOpen === 'brands'&&
          <div className='space-y-5'>
            {brands.map((item, idx) => (
              <div key={idx} className='cursor-pointer font-semibold gap-2  flex items-center mx-3'>
                <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  onClick={()=>onClickFilter(item)} />
                <label htmlFor={item} className='cursor-pointer'>{item}</label>
              </div>
            ))}
          </div>
          }
          <h3 onClick={()=> setIsOpen(IsOpen === 'products'? '':'products')} className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>Products {IsOpen === 'products'? <IoIosArrowUp/> :<IoIosArrowDown/>} </h3>
          {IsOpen === 'products'&&
          <div className='space-y-5'>
            {productsType.map((item, idx) => (
              <div key={idx} className='cursor-pointer font-semibold gap-2  flex items-center mx-3'>
                <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  onClick={()=>onClickFilter(item)} />
                <label htmlFor={item} className='cursor-pointer'>{item}</label>
              </div>
            ))}
          </div>
          }
        </div>
        <div className=''>
          <div className='my-5'>
            <div className='flex justify-between items-center mx-2'>
          <h1>Selected Products: <span className='font-bold'>{filteredTVs?.length}</span></h1>
          <button onClick={()=>setIsFilterOpen(!IsFilterOpen)} className='cursor-pointer flex sm:hidden items-center font-semibold gap-2 border px-4 py-1 rounded-md border-gray-400'>Filter <VscSettings/></button>
          </div>
          </div>
          <div className='flex flex-wrap gap-5 justify-center'>
          {filteredTVs?.map((item, idx) => (
            <ProductCard product={item} key={idx}/>
          ))}
          </div>
        </div>
      </div>
      {IsFilterOpen &&
      <div className='fixed bottom-0 z-10 bg-white w-[100%] sm:hidden min-h-[80vh] '>
      <RxCross2 onClick={()=>setIsFilterOpen(false)} className='cursor-pointer text-3xl text-end' />

          <h3 onClick={()=> setIsOpen(IsOpen === 'brands'? '':'brands')} className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>Brands {IsOpen === 'brands'? <IoIosArrowUp/> :<IoIosArrowDown/>} </h3>
          {IsOpen === 'brands'&&
          <div className='space-y-5'>
            {brands.map((item, idx) => (
              <div key={idx} className='cursor-pointer font-semibold gap-2  flex items-center mx-3'>
                <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  onClick={()=>onClickFilter(item)} />
                <label htmlFor={item} className='cursor-pointer'>{item}</label>
              </div>
            ))}
          </div>
          }
          <h3 onClick={()=> setIsOpen(IsOpen === 'products'? '':'products')} className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>Products {IsOpen === 'products'? <IoIosArrowUp/> :<IoIosArrowDown/>} </h3>
          {IsOpen === 'products'&&
          <div className='space-y-5'>
            {productsType.map((item, idx) => (
              <div key={idx} className='cursor-pointer font-semibold gap-2  flex items-center mx-3'>
                <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  onClick={()=>onClickFilter(item)} />
                <label htmlFor={item} className='cursor-pointer'>{item}</label>
              </div>
            ))}
          </div>
          }
        </div>
}
    </div>
  )
}

export default Page
