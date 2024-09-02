import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/types';

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-6">${product.price.toFixed(2)}</p>

            {/* Product Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Specifications (Optional) */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.specifications?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
