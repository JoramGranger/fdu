'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import CustomLink from '../../primitives/Link';
import CustomButton from '../../primitives/Button';
import CustomIcon from '../../primitives/Icon';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
import MainMenu from '../../composites/menu/mainMenu';


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
      <MainMenu user={user} onClose={onClose} variant='mobile'/>
    </div>
  );
};

export default MobileNav;
