'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CustomIcon from '../../primitives/Icon';
import { FaUser, FaSignOutAlt, FaShoppingBag, FaWrench } from 'react-icons/fa';

interface UserMenuProps {
  user: string | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50 bg-fd-pink-lite" ref={menuRef}>
      <button onClick={handleToggle} aria-label="User Menu">
        <CustomIcon Icon={FaUser} size="24" variant="text" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 border border-fd-pink-dark bg-fd-pink-lite rounded-md shadow-lg">
          <div className="py-2">
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fd-pink-dark hover:text-black">
              <div className="flex items-center">
                <CustomIcon Icon={FaUser} size="16" variant="text" />
                <span className="ml-2">Profile</span>
              </div>
            </Link>
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fd-pink-dark hover:text-black">
              <div className="flex items-center">
                <CustomIcon Icon={FaWrench} size="16" variant="text" />
                <span className="ml-2">Settings</span>
              </div>
            </Link>
            <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fd-pink-dark hover:text-black">
              <div className="flex items-center">
                <CustomIcon Icon={FaShoppingBag} size="16" variant="text" />
                <span className="ml-2">Orders</span>
              </div>
            </Link>
            <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-fd-pink-dark hover:text-black">
              <div className="flex items-center">
                <CustomIcon Icon={FaSignOutAlt} size="16" variant="text" />
                <span className="ml-2">Logout</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
