'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import CustomIcon from '../../primitives/Icon';
import CustomLink from '../../primitives/Link';
import CustomButton from '../../primitives/Button';

import { useState } from 'react';

const Navbar = () => {
  
  const [user, setUser] = useState("");
  return (
    <nav className="bg-fd-pink-lite shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/app-logo-compressed-black.png" alt="Logo" width={100} height={40} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-2">
          </div>
            <CustomLink href="/" variant='text'>
              Home
            </CustomLink>           
            <CustomLink href="/" variant='text'>
              Shop
            </CustomLink>           
            <CustomLink href="/" variant='text'>
              Contact
            </CustomLink>           
            <CustomLink href="/" variant='text'>
              About
            </CustomLink> 
            {user ? (
              <CustomLink href="/" variant='text'>
              Profile
            </CustomLink>
            ) : (
              <>
                <CustomButton variant="primary">
                  Login
                </CustomButton>
                <CustomLink href="/" variant='text'>
                  Signup
                </CustomLink>

              </>
            )}          

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className="bg-fd-pink-dark rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaSearch className="text-gray-500" />
              </div>
            </div>

            {/* Icons */}
            <CustomIcon Icon={FaBell} size="24" variant="text" />
            <CustomIcon Icon={FaUser} size="24" variant="text" />
            <CustomIcon Icon={FaSearch} size="24" variant="text" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
