import Image from "next/image";
import React from "react";
import samsung2 from '@/images/samsung3.webp'
import tcl from '@/images/tcl.webp'
import lg from '@/images/images.png'
import samsungPhone from '@/images/samsungphone.jpg'
const TypesProducts = () => {
  const products = [
    {
      id: 1,
      image: samsung2, // Replace with actual image paths
      title: "Samsung",
      description: "Samsung deliver stunning visuals, cutting-edge technology, and immersive entertainment for your home.",
    },
    {
      id: 2,
      image: samsungPhone, // Replace with actual image paths
      title: "Samsung Smart Phones",
      description: "Explore cutting-edge Samsung smartphones with innovative features, sleek designs, and powerful performance for every need.",
    },
    {
      id: 4,
      image: lg, // Replace with actual image paths
      title: "LG",
      description: "LG is a Korean brand known for quality electronics and home appliances. It makes TVs, home appliances, and soundbars.",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-4 justify-around">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[300px] border rounded-lg p-4 text-center transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4 "
            />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypesProducts;
