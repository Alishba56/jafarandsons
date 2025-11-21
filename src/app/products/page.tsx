"use client"

import ProductCard from '@/components/ProductCard';
import { TVSType } from '@/data/data';
import { getProducts } from '@/lib/getProducts';
import React, { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const brands = ['Samsung','LG','TCL']
  const productsType = ['Sound System', 'TV', 'Washing Machine', 'Refrigerator', 'Smart Phones']

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [data, setData] = useState<TVSType[]>()
  const [IsOpen, setIsOpen] = useState('brands')
  const [IsFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  const onClickFilter = (item:string) =>{
    if(selectedBrands.includes(item.toLowerCase())){
      setSelectedBrands(selectedBrands.filter((brand) => brand !== item.toLowerCase()));
    } else {
      setSelectedBrands([...selectedBrands, item.toLowerCase()]);
    }
    setCurrentPage(1) // reset page when filter changes
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setData(res.message);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [])

  const filteredTVs =
    selectedBrands.length === 0
      ? data
      : data?.filter(item =>
          item.tags.some(tag => selectedBrands.includes(tag))
        );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredTVs?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil((filteredTVs?.length || 0) / productsPerPage);

  return (
    <div className='max-w-7xl mx-auto px-2'>
      <h4 className='flex items-center gap-2 my-10 text-lg sm:text-xl'>
        Home <IoIosArrowForward/> Catalog
      </h4>
      <div className='flex gap-x-10'>
        {/* Sidebar Filters */}
        <div className='shrink-0 w-[300px] hidden sm:block'>
          {/* Brands */}
          <h3 onClick={()=> setIsOpen(IsOpen === 'brands'? '':'brands')} 
              className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Brands {IsOpen === 'brands'? <IoIosArrowUp/> :<IoIosArrowDown/>} 
          </h3>
          {IsOpen === 'brands' &&
            <div className='space-y-5'>
              {brands.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  
                         onClick={()=>onClickFilter(item)} />
                  <label htmlFor={item} className='cursor-pointer'>{item}</label>
                </div>
              ))}
            </div>
          }

          {/* Products Type */}
          <h3 onClick={()=> setIsOpen(IsOpen === 'products'? '':'products')} 
              className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Products {IsOpen === 'products'? <IoIosArrowUp/> :<IoIosArrowDown/>} 
          </h3>
          {IsOpen === 'products' &&
            <div className='space-y-5'>
              {productsType.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input type="checkbox" id={item} className='h-5 w-5 cursor-pointer'  
                         onClick={()=>onClickFilter(item)} />
                  <label htmlFor={item} className='cursor-pointer'>{item}</label>
                </div>
              ))}
            </div>
          }
        </div>

        {/* Products Section */}
        <div className='flex-1'>
          <div className='my-5 flex justify-between items-center mx-2'>
            <h1>Selected Products: <span className='font-bold'>{filteredTVs?.length || 0}</span></h1>
            <button onClick={()=>setIsFilterOpen(!IsFilterOpen)} 
                    className='cursor-pointer flex sm:hidden items-center font-semibold gap-2 border px-4 py-1 rounded-md border-gray-400'>
              Filter <VscSettings/>
            </button>
          </div>

          <div className='flex flex-wrap sm:gap-3  gap-5 px-6  sm:px-0'>
            {currentProducts?.map((item, idx) => (
              <ProductCard product={item} key={idx}/>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && 
            <div className="flex my-10 justify-center  gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev-1,1))}
                className="px-3 py-1 border rounded"
              >
                Prev
              </button>
              {Array.from({length: totalPages}, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i+1 ? 'bg-black text-white' : 'bg-white'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev+1,totalPages))}
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </div>
          }

        </div>
      </div>

      {/* Mobile Filter Modal */}
      {IsFilterOpen &&
        <div className='fixed bottom-0 z-10 bg-white w-full sm:hidden min-h-[80vh] p-4 overflow-y-auto'>
          <RxCross2 onClick={()=>setIsFilterOpen(false)} className='cursor-pointer text-3xl text-end mb-4' />

          {/* Brands */}
          <h3 onClick={()=> setIsOpen(IsOpen === 'brands'? '':'brands')} 
              className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Brands {IsOpen === 'brands'? <IoIosArrowUp/> :<IoIosArrowDown/>} 
          </h3>
          {IsOpen === 'brands' &&
            <div className='space-y-5'>
              {brands.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input type="checkbox" id={`mobile-${item}`} className='h-5 w-5 cursor-pointer'  
                         onClick={()=>onClickFilter(item)} />
                  <label htmlFor={`mobile-${item}`} className='cursor-pointer'>{item}</label>
                </div>
              ))}
            </div>
          }

          {/* Products Type */}
          <h3 onClick={()=> setIsOpen(IsOpen === 'products'? '':'products')} 
              className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Products {IsOpen === 'products'? <IoIosArrowUp/> :<IoIosArrowDown/>} 
          </h3>
          {IsOpen === 'products' &&
            <div className='space-y-5'>
              {productsType.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input type="checkbox" id={`mobile-prod-${item}`} className='h-5 w-5 cursor-pointer'  
                         onClick={()=>onClickFilter(item)} />
                  <label htmlFor={`mobile-prod-${item}`} className='cursor-pointer'>{item}</label>
                </div>
              ))}
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Page;
