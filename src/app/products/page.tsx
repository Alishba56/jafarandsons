"use client";

import ProductCard from '@/components/ProductCard';
import { TVSType } from '@/data/data';
import { getProducts } from '@/lib/getProducts';
import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const brands = ['Samsung', 'LG', 'TCL'];
  const productsType = ['Sound System', 'TV', 'Washing Machine', 'Refrigerator', 'Smart Phones'];

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [data, setData] = useState<TVSType[]>();
  const [IsOpen, setIsOpen] = useState('brands');
  const [IsFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // ------------------------------
  // BRAND FILTER
  // ------------------------------
  const onBrandFilter = (brand: string) => {
    const b = brand.toLowerCase();
    if (selectedBrands.includes(b)) {
      setSelectedBrands(selectedBrands.filter(item => item !== b));
    } else {
      setSelectedBrands([...selectedBrands, b]);
    }
    setCurrentPage(1);
  };

  // ------------------------------
  // TYPE FILTER
  // ------------------------------
  const onTypeFilter = (type: string) => {
    const t = type.toLowerCase();
    if (selectedTypes.includes(t)) {
      setSelectedTypes(selectedTypes.filter(item => item !== t));
    } else {
      setSelectedTypes([...selectedTypes, t]);
    }
    setCurrentPage(1);
  };

  // Fetch products
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
  }, []);

  // ------------------------------
  // FILTERING
  // ------------------------------
  const filteredTVs = data?.filter(item => {
  // brand match
  const matchBrand =
    selectedBrands.length === 0 ||
    selectedBrands.includes(item.brand.toLowerCase());

  // type match (SEARCH INSIDE TAGS ARRAY)
  const matchType =
    selectedTypes.length === 0 ||
    item.tags?.some(tag => selectedTypes.includes(tag.toLowerCase()));

  return matchBrand && matchType;
});

  // ------------------------------
  // PAGINATION
  // ------------------------------
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredTVs?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil((filteredTVs?.length || 0) / productsPerPage);

  return (
    <div className='max-w-7xl mx-auto px-2 min-h-screen mb-10'>
      <h4 className='flex items-center gap-2 my-10 text-lg sm:text-xl'>
        Home <IoIosArrowForward /> Catalog
      </h4>

      <div className='flex gap-x-10'>

        {/* ------------------------------ */}
        {/* SIDEBAR FILTERS */}
        {/* ------------------------------ */}
        <div className='shrink-0 w-[300px] hidden sm:block'>
          
          {/* Brands */}
          <h3
            onClick={() => setIsOpen(IsOpen === 'brands' ? '' : 'brands')}
            className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Brands {IsOpen === 'brands' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>

          {IsOpen === 'brands' &&
            <div className='space-y-5'>
              {brands.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input
                    type="checkbox"
                    id={item}
                    className='h-5 w-5 cursor-pointer'
                    checked={selectedBrands.includes(item.toLowerCase())}
                    onChange={() => onBrandFilter(item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          }

          {/* Product Types */}
          <h3
            onClick={() => setIsOpen(IsOpen === 'products' ? '' : 'products')}
            className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Products {IsOpen === 'products' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>

          {IsOpen === 'products' &&
            <div className='space-y-5'>
              {productsType.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input
                    type="checkbox"
                    id={item}
                    className='h-5 w-5 cursor-pointer'
                    checked={selectedTypes.includes(item.toLowerCase())}
                    onChange={() => onTypeFilter(item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          }

        </div>

        {/* ------------------------------ */}
        {/* PRODUCTS SECTION */}
        {/* ------------------------------ */}
        <div className='flex-1'>
          <div className='my-5 flex justify-between items-center mx-2'>
            <h1>Selected Products: <span className='font-bold'>{filteredTVs?.length || 0}</span></h1>

            <button
              onClick={() => setIsFilterOpen(!IsFilterOpen)}
              className='cursor-pointer flex sm:hidden items-center font-semibold gap-2 border px-4 py-1 rounded-md border-gray-400'>
              Filter <VscSettings />
            </button>
          </div>

          {/* Product Cards */}
          <div className='flex flex-wrap sm:gap-3 gap-5 px-6 sm:px-0'>
            {currentProducts?.map((item, idx) => (
              <ProductCard product={item} key={idx} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 &&
            <div className="flex my-10 justify-center gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded">
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-white'}`}>
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="px-3 py-1 border rounded">
                Next
              </button>
            </div>
          }
        </div>
      </div>

      {/* ------------------------------ */}
      {/* MOBILE FILTER MODAL */}
      {/* ------------------------------ */}
      {IsFilterOpen &&
        <div className='fixed bottom-0 z-10 bg-white w-full sm:hidden min-h-[80vh] p-4 overflow-y-auto'>
          <RxCross2 onClick={() => setIsFilterOpen(false)} className='cursor-pointer text-3xl text-end mb-4' />

          {/* Brands */}
          <h3
            onClick={() => setIsOpen(IsOpen === 'brands' ? '' : 'brands')}
            className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Brands {IsOpen === 'brands' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>

          {IsOpen === 'brands' &&
            <div className='space-y-5'>
              {brands.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input
                    type="checkbox"
                    id={`mobile-${item}`}
                    className='h-5 w-5 cursor-pointer'
                    checked={selectedBrands.includes(item.toLowerCase())}
                    onChange={() => onBrandFilter(item)}
                  />
                  <label htmlFor={`mobile-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          }

          {/* Product Types */}
          <h3
            onClick={() => setIsOpen(IsOpen === 'products' ? '' : 'products')}
            className='cursor-pointer my-3 font-semibold text-2xl flex justify-between items-center'>
            Products {IsOpen === 'products' ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </h3>

          {IsOpen === 'products' &&
            <div className='space-y-5'>
              {productsType.map((item, idx) => (
                <div key={idx} className='cursor-pointer font-semibold gap-2 flex items-center mx-3'>
                  <input
                    type="checkbox"
                    id={`mobile-prod-${item}`}
                    className='h-5 w-5 cursor-pointer'
                    checked={selectedTypes.includes(item.toLowerCase())}
                    onChange={() => onTypeFilter(item)}
                  />
                  <label htmlFor={`mobile-prod-${item}`}>{item}</label>
                </div>
              ))}
            </div>
          }

        </div>
      }
    </div>
  );
};

export default Page;
