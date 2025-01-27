"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full py-4 px-6 bg-white shadow-md">
      <header className="flex flex-wrap items-center justify-between mx-auto h-fit">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-[40px] h-[32px] sm:w-[50px] sm:h-[40px]"
            width={50}
            height={50}
          />
          <h1 className="text-[24px] sm:text-[34px] font-bold text-black">Furniro</h1>
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8 lg:gap-12 text-[14px] sm:text-[16px] font-medium text-selfcolors-darkBrown">
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 text-selfcolors-darkBrown">
          <Link href="/signup" className="hover:text-blue-500 transition-colors">
            <Icon icon="mdi:account-alert-outline" className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <Link href="/search" className="hover:text-blue-500 transition-colors">
            <Icon icon="si:search-line" className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <Link href="/favorites" className="hover:text-blue-500 transition-colors">
            <Icon icon="solar:heart-linear" className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <Link href="/cart" className="hover:text-blue-500 transition-colors">
            <Icon icon="streamline:shopping-cart-2" className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <Icon
              icon={isMobileMenuOpen ? "heroicons-outline:x" : "heroicons-outline:menu-alt-3"}
              className="w-8 h-8"
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden">
          <nav>
            <ul className="flex flex-col gap-4 text-[14px] sm:text-[16px] font-medium">
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/blog">blog</Link>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Icons Section (Mobile) */}
          <div className="mt-6 flex justify-evenly border-t pt-4">
            <Link href="/signup" className="hover:text-blue-500 transition-colors">
              <Icon icon="mdi:account-alert-outline" className="w-7 h-7" />
            </Link>
            <Link href="/search" className="hover:text-blue-500 transition-colors">
              <Icon icon="si:search-line" className="w-7 h-7" />
            </Link>
            <Link href="/favorites" className="hover:text-blue-500 transition-colors">
              <Icon icon="solar:heart-linear" className="w-7 h-7" />
            </Link>
            <Link href="/cart" className="hover:text-blue-500 transition-colors">
              <Icon icon="streamline:shopping-cart-2" className="w-7 h-7" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

