"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHeart, FaStar, FaStarHalfAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev));

  return (
    <div className="container mx-auto px-10 py-0">
      {/* Breadcrumb Header */}
      <div className="bg-selfcolors-lightCream w-full py-4">
        <div className="container mx-auto px-4">
          <h2 className="text-sm md:text-base font-medium">
            Home &gt; Shop &gt; Asgaard
          </h2>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
  {/* Side Images */}
  <div className="col-span-12 md:col-span-2 flex md:flex-col justify-center gap-4 md:gap-2 pt-4 md:pt-10 pl-4 md:pl-8">
    {["Group 95", "Group94", "sofa3", "sofa"].map((pic, index) => (
      <Image
        key={index}
        src={`/${pic}.png`}
        alt={`Product ${index + 1}`}
        width={100}
        height={64}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-35 object-cover border rounded-md"
      />
    ))}
  </div>

{/* Center Image */}
<div className="col-span-12 md:col-span-4 flex justify-center items-center">
  <Image
    src={"/Group 95.png"}
    alt="Main Product"
    width={350}
    height={350}
    className="w-3/4 sm:w-5/6 md:w-11/12 h-auto max-h-96 object-contain"
  />
</div>


        {/* Product Details */}
        <div className="col-span-12 md:col-span-6 space-y-4">
          <h1 className="text-lg md:text-xl font-bold">Asgaard sofa</h1>
          <h1 className="text-lg md:text-xl font-bold text-gray-600">Rs. 250,000.00</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }, (_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
            <span className="text-gray-400 text-xs">(3457 Reviews)</span>
            <span className="text-blue-500 text-xs">| In Stock</span>
          </div>
          <p className="text-gray-600 text-xs md:text-sm">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div>
            <h4 className="text-base font-semibold">Color</h4>
            <div className="flex gap-4 mt-2 items-center">
              <div className="w-5 h-5 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-purple-800 rounded-full"></div>
              <div className="w-5 h-5 bg-amber-900 rounded-full"></div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold">Size</h4>
            <div className="flex gap-2 flex-wrap mt-2">
              {["L", "XL", "XS"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md border text-center cursor-pointer ${selectedSize === size ? "bg-red-500 text-white" : "bg-gray-200"} hover:bg-red-500 hover:text-white`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-5 py-1">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2">
              Buy Now
              <FaHeart />
            </button>
            <button className="px-5 py-2 bg-white text-black border border-black rounded-md hover:bg-gray-100">
              + Compare
            </button>
          </div>
          <div className="space-y-1 text-xs md:text-sm">
            <p><strong>SKU:</strong> SS001</p>
            <p><strong>Category:</strong> Sofa</p>
            <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
            <p className="flex items-center gap-4">
              <strong>Share:</strong>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <FaFacebook size={16} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <FaInstagram size={16} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <FaTwitter size={16} />
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-t-2 border-gray-300 w-full" />

      {/* Description Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center flex justify-evenly">
          <h2 className="text-lg md:text-xl font-bold">Description</h2>
          <h2 className="text-lg md:text-xl font-semibold text-gray-500">Additional Information</h2>
          <h2 className="text-lg md:text-xl font-semibold text-gray-500">Reviews [5]</h2>
        </div>
        <p className="text-gray-600 my-4">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          <br />
          <br />
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
        </p>
      </div>
 
    
      {/* Additional Images */}
      <div className="grid grid-cols-2 gap-6 my-6 text-center">
        <Image src="/Group 106.png" alt="Image 1" width={200} height={250} className="w-full object-cover" />
        <Image src="/Group 107.png" alt="Image 2" width={200} height={250} className="w-full object-cover" />
      </div>

      <hr className="my-6 border-t-2 border-gray-300 w-full" />

      <div className=" flex justify-center h-32 items-center text-2xl font-bold text-black">
  <h1>Related Products</h1>
 </div>
      {/* 4 Product Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
  {[
    { 
      id: "product1", 
      name: "Syltherine", 
      desc: "Stylish cafe chair", 
      price: "Rp 2.500.000", 
      discountPrice: "Rp 3.500.000", 
      image: "/images-a.png", 
      tag: "-30% OFF", // Tag text for this product
      tagColor: "bg-red-500" // Color for the tag
    },
    { 
      id: "product2", 
      name: "Leviosa", 
      desc: "Stylish", 
      price: "Rp 2.500.000", 
      image: "/Images.png", 
     
    },
    { 
      id: "product3", 
      name: "Lolito", 
      desc: "Luxury big sofa", 
      price: "Rp 7.000.00", 
      discountPrice: "Rp 14,000.00",
      image: "/Images (3).png",
      tag: "-50% OFF", // Tag text for this product
      tagColor: "bg-red-500" // Color for the tag
    },
    { 
      id: "product4", 
      name: "Respira", 
      desc: "Outdoor bar table and stool", 
      price: "Rp 500.000",  
      discountPercent: "New", // Custom text for "New"
      image: "/Images (4).png",  
      tag: "New", // Tag text for this product
      tagColor: "bg-green-500" // Color for the "New" tag
    }
  ]
  .map((product) => (
    <div key={product.id} className="text-center border p-4 rounded-lg relative hover:scale-105">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={150} 
        height={150} 
        className="w-full object-cover" 
      />
      <div className={`absolute top-0 right-0 text-white text-xs font-semibold px-2 py-1 rounded-br-lg ${product.tagColor}`}>
        {product.tag}
      </div>
      <h3 className="text-md font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.desc}</p>
      <p className="text-gray-500 font-bold line-through">{product.price}</p>
      <p className="text-gray-800 font-bold">{product.discountPrice}</p>
     </div>
  ))}
</div>
<div className="flex justify-center mt-8">
          <Link href="/product">
          <button className="mt-4 px-4 py-2 bg-selfcolors-darkBrown text-black font-semibold rounded-lg w-44 h-14">
            See More
          </button>
        </Link>
        </div> 
  </div>
  );
}

export default ProductPage;
