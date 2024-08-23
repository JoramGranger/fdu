'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import CustomIcon from '../../primitives/Icon';
import CustomLink from '../../primitives/Link';
import CustomButton from '../../primitives/Button';
import MobileNav from './mobileNav';
import UserMenu from '../../composites/menu/userMenu';
import MiniCart from '../../composites/cart/MiniCart';

const Navbar = () => {
  const [user, setUser] = useState("M");
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Replace with actual cart items

  const handleMobileNavToggle = () => setMobileNavOpen(!isMobileNavOpen);
  const handleMiniCartToggle = () => setMiniCartOpen(!isMiniCartOpen);

  return (
    <>
      <nav className="bg-fd-pink-lite shadow-md sticky top-0 z-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Hamburger Icon */}
            <div className="flex items-center w-full">
              {/* Hamburger Icon */}
              <div className="block md:hidden mr-2">
                <button onClick={handleMobileNavToggle} aria-label="Toggle Navigation">
                  <CustomIcon Icon={FaBars} size="24" variant="text" />
                </button>
              </div>

              <div className="flex-shrink-0">
                <Link href="/">
                  <Image src="/assets/app-logo-compressed-black.png" alt="Logo" width={100} height={40} />
                </Link>
              </div>

              <div className="ml-auto block md:hidden">
                  <button onClick={handleMiniCartToggle} aria-label="Toggle Mini Cart">
                    <CustomIcon Icon={FaShoppingCart} size="24" variant="text" />
                  </button>
              </div>

              {/* Navigation Links (Desktop) */}
              <div className="hidden md:flex items-center bg-fd-pink-lite gap-6 space-x-4 ml-8">
                <CustomLink href="/" variant="text">
                  Home
                </CustomLink>
                <CustomLink href="/" variant="text">
                  Shop
                </CustomLink>
                <CustomLink href="/" variant="text">
                  Contact
                </CustomLink>
                <CustomLink href="/" variant="text">
                  About
                </CustomLink>
                {user ? (
                  <CustomLink href="/" variant="text">
                    Logout
                  </CustomLink>
                ) : (
                  <>
                    <CustomButton variant="primary">
                      Login
                    </CustomButton>
                    <CustomLink href="/" variant="text">
                      Signup
                    </CustomLink>
                  </>
                )}
              </div>
            </div>

            {/* Search Bar and Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              <div className="relative">
                <input
                  type="text"
                  className="bg-white rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-fd-pink-dark"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CustomIcon Icon={FaSearch} size="16" variant="primary" />
                </div>
              </div>
              {user ? (
                <>
                  <UserMenu user={user} />
                  <CustomLink href="/" variant="text">
                    <CustomIcon Icon={FaHeart} size="24" variant="text" />
                  </CustomLink>
                  <button onClick={handleMiniCartToggle} aria-label="Toggle Mini Cart">
                    <CustomIcon Icon={FaShoppingCart} size="24" variant="text" />
                  </button>
                </>
              ) : (
                <button>
                  <CustomIcon Icon={FaShoppingCart} size="24" variant="text" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={handleMobileNavToggle} user={user} />

      {/* Mini Cart */}
      <MiniCart isOpen={isMiniCartOpen} onClose={handleMiniCartToggle} cartItems={cartItems} />
    </>
  );
};

export default Navbar;
