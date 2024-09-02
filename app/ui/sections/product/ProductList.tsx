import React from 'react';
import ProductCard from '@/app/ui/composites/product/productCard';
import { Product } from '@/app/types';

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;