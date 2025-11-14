import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between gap-8">
        {/* Company Info */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl font-bold mb-4">Jafer & Sons</h2>
          <p className="text-gray-400  mb-4">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        {/* Home Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Brand Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Brand</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">SAMSUNG</Link></li>
            <li><Link href="#" className="hover:text-white">TCL</Link></li>
            <li><Link href="#" className="hover:text-white">LG</Link></li>
          </ul>
        </div>

        {/* Accessories Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Accessories</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-white">TV</Link></li>
            <li><Link href="#" className="hover:text-white">REFRIGERATOR</Link></li>
            <li><Link href="#" className="hover:text-white">SOUND SYSTEM</Link></li>
            <li><Link href="#" className="hover:text-white">WASHING MACHINE</Link></li>
            <li><Link href="#" className="hover:text-white">AIR CONDITION</Link></li>
          </ul>
        </div>
      </div>
        <div className='flex  text-gray-400 justify-center mt-10'>
          <h1>© 2025 Jafer & Sons All rights reserved.</h1>
        </div>
    </footer>
  );
};

export default Footer;
