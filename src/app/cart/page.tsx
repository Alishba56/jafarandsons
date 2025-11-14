"use client";
import { TVSType } from "@/data/data";
import { getProducts } from "@/lib/getProducts";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const parsePrice = (price: string) => {
  return Number(price.replace(/[^0-9.-]+/g, ""));
};

const Page = () => {
  const [cart, setCart] = useState<
    { id: string; price: string; size: string; quantity: number }[]
  >([]);
  const [products, setProducts] = useState<TVSType[]>([]);

  // ✅ Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      const parsed = JSON.parse(storedCart).map((item: any) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCart(parsed);
    }
  }, []);

  // ✅ Fetch products matching cart
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }else{
      setProducts([])
    }

    const getProduct = async () => {
      const TVS = await getProducts();

      const filtered = TVS.message.filter((item: TVSType) =>
        cart.some((c) => c.id === String(item.id))
      );

      setProducts(filtered);
    };

    if (cart.length > 0) getProduct();
  }, [cart]);

  // ✅ Quantity update
  const updateQuantity = (id: string, increase: boolean) => {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: increase
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          }
        : item
    );

    setCart(updated);
    localStorage.setItem("cartItem", JSON.stringify(updated));
  };

  // ✅ Remove from cart
  const removeFromCart = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItem", JSON.stringify(updated));
    toast.success("Removed from cart", { autoClose: 2000 });
  };

  // ✅ Total cart calculation
  const total = cart.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ✅ CART ITEMS */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          {products.length !== 0 ? 
          <div className="space-y-4">
            {products.map((product) => {
              const cartItem = cart.find((c) => c.id === String(product.id));

              return (
                <div
                  key={product.id}
                  className="flex justify-between gap-4 border-b border-gray-300 p-4 bg-card"
                >
                  {/* ✅ Product Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded"
                    />
                  </div>

                  {/* ✅ Product Title */}
                  <div className="flex items-center flex-1">
                    <h3 className="font-semibold">{product.title}</h3>
                  </div>

                  {/* ✅ Quantity + Price + Remove */}
                  <div className="flex items-center gap-4">
                    {/* ✅ Quantity */}
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => updateQuantity(product.id.toString(), false)}
                        className="p-1 hover:bg-muted"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="px-3 min-w-8 text-center">
                        {cartItem?.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(product.id.toString(), true)}
                        className="p-1 hover:bg-muted"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* ✅ Price */}
                    <span className="font-semibold min-w-16 text-right">
                      RS {parsePrice((product.discountedPrice  as string)).toLocaleString()}
                    </span>

                    {/* ✅ Remove */}
                    <button
                      onClick={() => removeFromCart(product.id.toString())}
                      className="p-1 hover:bg-destructive/10 hover:text-destructive rounded cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>: 
          <div className="h-full flex flex-col gap-5 items-center justify-center"> 
          <h2>No Item Found</h2>
          <Link href={'/products'}>
          <button className="bg-black cursor-pointer text-white rounded-lg py-3 px-5">Continue Shopping</button>
          </Link>
          </div>}
        </div>

        {/* ✅ ORDER SUMMARY */}
        <div className="lg:col-span-1">
          <div className="bg-card border rounded-lg p-6 h-fit sticky top-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* ✅ Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold">Total</span>
              <span className="text-2xl font-bold">
                RS {total.toLocaleString()}
              </span>
            </div>

            <Link href="/checkout">
            <button className="w-full bg-black text-white py-3 rounded-lg cursor-pointer">
              Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
