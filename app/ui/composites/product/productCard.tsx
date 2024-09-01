import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
