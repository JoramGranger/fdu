'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import CustomLink from '../../primitives/Link';
import CustomButton from '../../primitives/Button';
import CustomIcon from '../../primitives/Icon';
import { autoBatchEnhancer } from '@reduxjs/toolkit';


const MobileNav = ({ isOpen, onClose, user }) => {
  return (
    <div className={`fixed inset-0 z-40 bg-fd-pink-lite transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={onClose} aria-label="Close Menu">
          <CustomIcon Icon={FaTimes} size="24" variant="text" />
        </button>
        <div>
          <Link href="/">
            <Image src="/assets/app-logo-compressed-black.png" alt="Logo" width={100} height={40} style={{ width: "auto", height: "40"}} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <CustomLink href="/" variant="text" onClick={onClose}>
          Home
        </CustomLink>
        <CustomLink href="/" variant="text" onClick={onClose}>
          Shop
        </CustomLink>
        <CustomLink href="/" variant="text" onClick={onClose}>
          Contact
        </CustomLink>
        <CustomLink href="/" variant="text" onClick={onClose}>
          About
        </CustomLink>
        {user ? (
          <CustomLink href="/" variant="text" onClick={onClose}>
            Logout
          </CustomLink>
        ) : (
          <>
            <CustomButton variant="primary" onClick={onClose}>
              Login
            </CustomButton>
            <CustomLink href="/" variant="text" onClick={onClose}>
              Signup
            </CustomLink>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
