"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart, FaShareAlt, FaExchangeAlt, FaSlidersH, FaThLarge } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { client } from "@/sanity/lib/client"; // Import the Sanity client
import { urlForImage } from "@/sanity/lib/image"; // Import the urlForImage function

const ShopPage = () => {
  const [products, setProducts] = useState<any[]>([]); // Store products data
  const [show, setShow] = useState(16); // Default number of items per page
  const [sortBy, setSortBy] = useState("Default"); // Default sort option
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`
        *[_type == "product"] | order(title asc) {
          _id,
          image,
          title,
          subtitle,
          "slug": slug.current,
          originalPrice,
          previousPrice,
          discountTag
        }
      `);
      setProducts(data); // Set fetched products in state
    };

    fetchProducts();
  }, []); // Run once on component mount

  const handleShowChange = (newShow: number) => {
    setShow(newShow);
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="relative">
        <Image
          src="/blog.png"
          alt="Hero Image"
          width={1600} // Adjust width to be responsive
          height={600} // Adjust height accordingly
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80} // Adjusted for logo size
            height={80}
            className="w-20 h-20 object-contain cursor-pointer"
          />
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
            <p className="text-gray-600 text-lg">Home &gt; Shop</p>
          </div>
        </div>
      </div>

      {/* Filters and Sort Options */}
      <div className="h-auto bg-selfcolors-lightCream flex flex-col sm:flex-row items-center justify-between py-4 px-2 sm:px-6">
        <div className="flex flex-wrap items-center justify-evenly sm:justify-between w-full space-x-3 sm:space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaSlidersH size={28} />
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold">
              Filter
            </h3>
          </div>
          <FaThLarge size={25} />
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="h-[2px] w-[20px] bg-black"></div>
            <div className="h-[8px] w-[25px] bg-black"></div>
            <div className="h-[2px] w-[20px] bg-black"></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 w-full">
          <span className="text-xs sm:text-sm md:text-base">
            Showing 1–{show} of {products.length} results
          </span>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleShowChange(show === 16 ? 32 : 16)}
          >
            <span className="text-xs sm:text-sm md:text-base">Show</span>
            <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md">
              <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">
                {show}
              </h3>
            </div>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() =>
              handleSortChange(sortBy === "Default" ? "Price" : "Default")
            }
          >
            <span className="text-xs sm:text-sm md:text-base">Sort by</span>
            <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md">
              <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">
                {sortBy}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products
          .slice((currentPage - 1) * show, currentPage * show)
          .map((product) => (
            <div
              key={product._id}
              className="text-center border p-4 rounded-lg relative hover:scale-95 transition-transform group"
            >
              <div className="relative">
                {/* Ensure image source is valid */}
                {product.image && product.image !== "" ? (
                  <Image
                    src={urlForImage(product.image).url()} // Use urlForImage to fetch image URL
                    alt={product.title}
                    width={500}
                    height={500}
                    className="w-full object-cover"
                  />
                ) : (
                  // Fallback image when image is missing, invalid, or empty string
                  <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div
                  className={`absolute top-0 right-0 text-white text-xs font-semibold px-2 py-1 rounded-br-lg ${product.discountTag ? "bg-red-500" : ""}`}
                >
                  {product.discountTag}
                </div>
              </div>
              <h3 className="text-md font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.subtitle}</p>
              <p className="text-gray-500 font-bold line-through">
                {product.originalPrice}
              </p>
              <p className="text-gray-800 font-bold">{product.previousPrice}</p>

              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      
                  <button className="bg-white text-black py-2 px-4 rounded-lg text-lg font-semibold">
                    Add to Cart
                  </button>
          
                <div className="mt-4 flex gap-6 text-white">
                  <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
                    <FaShareAlt className="mb-1" />
                    Share
                  </button>
                  <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
                    <FaExchangeAlt className="mb-1" />
                    Compare
                  </button>
                  <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
                    <FaHeart className="mb-1" />
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-8 mt-14">
        {[1, 2, 3].map((page) => (
          <div
            key={page}
            className={`w-[60px] h-[60px] flex items-center justify-center cursor-pointer ${currentPage === page ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        ))}
        <div
          className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer bg-[#F9F1E7]"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
