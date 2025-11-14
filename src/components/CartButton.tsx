"use client";
import { ToastContainer, toast } from 'react-toastify';

import React, { useEffect, useState } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";

interface Props {
  id: string;
  size: string;
  add?: string;
  price: string;
}

interface CartType {
  id: string;
  size: string;
  price: string
}

const CartButton = ({ id, size, price }: Props) => {
  const [cart, setCart] = useState<CartType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
    localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

  

  const addCart = ({ id, size, price }: Props) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
    toast.success('Product has already added', {autoClose: 2000, theme: 'dark'})    
    return
    } else {
      setCart([...cart, { id, size, price }]);
    }
    toast.success('Product has been added to cart', {autoClose: 2000, theme: 'dark'})
  };
  
  const delCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    if(updatedCart.length === 0){
      localStorage.setItem("cartItem", JSON.stringify([]));
    }
    
    toast.success('Product has been removed from cart', {autoClose: 2000, theme: 'light'})
  };

  const isInCart = cart.some((item) => item.id === id);

  return (
    <>
    <ToastContainer />
        <button
          type="button"
          className="hover:bg-white hover:border-black border hover:text-black duration-300 cursor-pointer bg-black text-white py-2 px-8 rounded-lg"
          onClick={() => addCart({ id, size, price })}
        >
          Add to cart
        </button>
    </>
  );
};

export default CartButton;