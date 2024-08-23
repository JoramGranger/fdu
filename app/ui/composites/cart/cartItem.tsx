import React from 'react';
import Image from 'next/image';

interface CartItemProps {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ image, name, quantity, price }) => {
  return (
    <div className="flex items-center space-x-4">
      <Image src={image} alt={name} width={60} height={60} className="rounded-md" />
      <div className="flex-1">
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm text-gray-800">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
