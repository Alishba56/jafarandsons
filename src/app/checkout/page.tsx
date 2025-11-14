"use client";
import type { TVSType } from "@/data/data";
import { getProducts } from "@/lib/getProducts";
import { ChevronLeft, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const parsePrice = (price: string) => Number(price.replace(/[^0-9.-]+/g, ""));

const CheckoutPage = () => {
  const [cart, setCart] = useState<{ id: string; price: string; size: string; quantity: number }[]>([]);
  const [products, setProducts] = useState<TVSType[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
  });

  // Load cart
  useEffect(() => {
    const stored = localStorage.getItem("cartItem");
    if (stored) {
      const parsed = JSON.parse(stored).map((i: any) => ({ ...i, quantity: i.quantity || 1 }));
      setCart(parsed);
    }
  }, []);

  // Fetch products
  useEffect(() => {
    const load = async () => {
      const data = await getProducts();
      const filtered = data.message.filter((p: TVSType) => cart.some((c) => c.id === String(p.id)));
      setProducts(filtered);
    };
    if (cart.length > 0) load();
  }, [cart]);

  const total = cart.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    toast.info("Item removed from cart", { autoClose: 1500 });
  };

  // ✅ WhatsApp Order Function
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.address || !formData.city || !formData.phone) {
      toast.error("Please fill all required fields", { autoClose: 2000 });
      return;
    }

    setLoading(true);

    // Build message for WhatsApp
    const orderDetails = products
      .map((p) => {
        const item = cart.find((c) => c.id === String(p.id));
        return `🛍 *${p.title}*
Quantity: ${item?.quantity}
Price: Rs ${parsePrice(p.discountedPrice as string).toLocaleString()}`;
      })
      .join("\n\n");

    const message = `*🧾 New Order Received!*\n\n👤 *Customer:* ${formData.firstName} ${formData.lastName}\n📞 *Phone:* ${formData.phone}\n🏠 *Address:* ${formData.address}, ${formData.city}\n\n${orderDetails}\n\n━━━━━━━━━━━━━━━━━━\n💰 *Total:* Rs ${total.toLocaleString()}\n━━━━━━━━━━━━━━━━━━\n\nThank you for shopping with us! 🖤`;

    // Your WhatsApp number (replace with your own)
    const phoneNumber = "+923452271719"; // Example: 923331112222

    // Open WhatsApp chat
const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
window.open(whatsappURL, "_blank");


    // Clear cart after sending
    localStorage.removeItem("cartItem");
    setCart([]);
    setProducts([]);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
    });

    setLoading(false);
    toast.success("Redirecting to WhatsApp...", { autoClose: 2000 });
  };

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">🛒 Your cart is empty</h1>
        <Link href="/products">
          <button className="bg-black text-white rounded-full py-3 px-8 shadow-md hover:bg-gray-900 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <Link href="/cart">
        <button className="flex items-center gap-2 mb-6 text-gray-500 hover:text-gray-800 transition">
          <ChevronLeft size={20} />
          Back to Cart
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-8 tracking-tight text-gray-900">Checkout</h1>

      {/* FORM */}
      <form onSubmit={handlePlaceOrder} className="space-y-8">
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Street Address *"
            value={formData.address}
            onChange={handleChange}
            className="w-full border mt-4 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-black outline-none"
          />
        </section>

        {/* ORDER SUMMARY */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-72 overflow-y-auto">
            {products.map((p) => {
              const item = cart.find((c) => c.id === String(p.id));
              return (
                <div key={p.id} className="flex gap-3 pb-4 border-b border-gray-100">
                  <Image
                    src={p.images[0] || "/placeholder.svg"}
                    alt={p.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-800 line-clamp-2">{p.title}</p>
                    <p className="text-xs text-gray-500">Qty: {item?.quantity}</p>
                    <p className="font-semibold text-sm text-gray-900 mt-1">
                      RS {(parsePrice(p.discountedPrice as string) * (item?.quantity || 1)).toLocaleString()}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(String(p.id))}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">RS {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total</span>
              <span>RS {total.toLocaleString()}</span>
            </div>
          </div>
        </section>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Place Order on WhatsApp"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
