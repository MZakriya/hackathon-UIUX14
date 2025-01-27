"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter


function Cart() {
  const router = useRouter(); // Initialize useRouter
  const initialCart = [
    { id: 1, name: "Asgaard Sofa", price: 250.000, image: "/Group 95.png" },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateSubtotal = (price: number) => price;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price),
      0
    );
  };

  const subtotal = calculateTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  // Handle Checkout Navigation
  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div>
     <div className="relative">
  <Image
    src="/blog.png"
    alt="Hero Image"
    width={1400}
    height={400}
    className="object-cover w-full h-[300px] sm:h-[400px]"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
    <Image
      src="/logo.png"
      alt="Logo"
      width={80}
      height={80}
      className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
    />
    <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
       Cart
    </h1>
    <p className="mt-2 text-sm sm:text-lg text-gray-600">
      Home &gt; Cart
    </p>
  </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto p-4 pb-16">
        {/* Main Flexbox Section - Responsive Cart View */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8">
          {/* Cart Items Section */}
          <div className="w-full md:w-2/3 bg-customCream px-2 py-4 rounded-lg shadow-md">
            <div className="overflow-auto mb-8 bg-customCream">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">
                      Product
                    </th>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">
                      Price
                    </th>
                    <th className="border px-4 py-2 text-lg bg-selfcolors-lightCream">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b group hover:bg-gray-100"
                    >
                      <td className="px-4 py-2 flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                          width="64"
                          height="64"
                        />
                        <span className="text-lg md:text-base">
                          {item.name}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-lg md:text-base">
                        ${item.price}
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <button
                          className="text-selfcolors-darkBrown hover:text-red-800 transition px-2 py-1"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="w-full md:w-1/3 bg-selfcolors-customCream shadow-md p-6 border rounded-md">
            <h2 className="text-gray-900 text-2xl md:text-3xl text-center font-bold mb-4">
              Cart Summary
            </h2>
            <div className="flex justify-between mb-2 text-sm md:text-lg">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm md:text-lg">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4 font-bold text-lg md:text-xl">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button
              onClick={handleCheckout} // Call handleCheckout on click
              className="w-full bg-selfcolors-lightCream text-black px-4 py-2 rounded-lg shadow-md border-black border hover:bg-selfcolors-darkBrown transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
