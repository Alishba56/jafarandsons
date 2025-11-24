import Link from "next/link";
import React from "react";

const categories = [
  { name: "Smart TVS", icon: "TCL", link: "/products/brands/tcl" },
  { name: "Smart TVS & Phones", icon: "SAMSUNG", link: "/products/brands/samsung" },
  { name: "Smart TVS & Sound System", icon: "LG", link: "/products/brands/lg" },
  
];

const Brands = () => {
  
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold ml-6 sm:ml-0">Browse By Brands</h2>

      <div className="flex flex-wrap gap-4 justify-evenly w-full mt-5 ">
        {categories.map((category, index) => (
          <Link href={category.link} key={index}>
          <div
            className="cursor-pointer py-10 flex flex-col items-center justify-center w-52  bg-gray-100 rounded-md shadow-md hover:shadow-lg"
          >
            <h1 className="text-2xl">{category.icon}</h1>
            <p className="text-center text-sm mt-2 text-gray-600">{category.name}</p>
          </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Brands;
