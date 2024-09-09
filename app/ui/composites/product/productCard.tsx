import { useState } from 'react';
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  productId: string;
  title: string;
  price: string;
  imageSrc: string;
  rating: number;
  reviewsCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ productId, title, price, imageSrc, rating, reviewsCount }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  return (
    <Link href={`/product/${productId}`} passHref>
      <div
        className="relative bg-pink-50 p-4 mx-2 rounded-lg shadow-lg group cursor-pointer w-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setAddedToCart(false); // Reset cart button on mouse leave
        }}
      >
        {/* Icons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaHeart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaEye size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <FaShoppingCart size={18} />
          </button>
        </div>

        {/* Product Image */}
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-32 object-contain mb-4 transform transition-transform duration-300 hover:scale-110"
            width={150}
            height={150}
          />


        {/* Add to Cart Button - animated and only visible on hover */}
        {isHovered && (
          <button
          onClick={(e) => {
            e.preventDefault(); // Prevent the link from being triggered when clicking Add to Cart
            handleAddToCart();
          }}
          className={`absolute bottom-0 left-0 w-full text-white bg-black text-center py-2 flex items-center justify-center gap-2 transition-transform transform ${
            addedToCart ? 'bg-gray-500' : 'bg-black'
          } ${isHovered ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-out`}
        >
          <FaShoppingCart size={18} />
          <span>{addedToCart ? ' Added' : ' Add to cart'}</span>
        </button>
        
        )}

        {/* Product Info */}
        <div className="pt-2">
          <h3 className="text-md font-medium">{title}</h3>
          <p className="text-red-600">{price}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaHeart key={i} size={16} className={i < rating ? 'text-yellow-500' : 'text-gray-300'} />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">({reviewsCount})</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;