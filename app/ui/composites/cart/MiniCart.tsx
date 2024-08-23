'use client';
import React from 'react';
import Link from 'next/link';
import CustomButton from '../../primitives/Button';
import CartItemList from './cartItemList';

interface CartItemType {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemType[]; // Use CartItemType instead of any
}

const MiniCart: React.FC<MiniCartProps> = ({ isOpen, onClose, cartItems }) => {
  const isCartEmpty = cartItems.length === 0;

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full md:w-1/3 bg-fd-pink-lite shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="relative flex justify-center items-center p-4 bg-fd-pink-lite shadow-md">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose} aria-label="Close Cart" className="absolute right-4">
          <span className="text-xl">&times;</span>
        </button>
      </div>

      <div className="p-4">
        {isCartEmpty ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <CartItemList cartItems={cartItems} />
        )}

        <div className="mt-6 flex flex-row items-center justify-center">
          <Link href="/cart" className='mx-2'>
            <CustomButton variant="primary" disabled={isCartEmpty} className="w-full">
              View Cart
            </CustomButton>
          </Link>
          <Link href="/checkout" className='mx-2'>
            <CustomButton variant="secondary" disabled={isCartEmpty} className="w-full">
              Checkout
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;