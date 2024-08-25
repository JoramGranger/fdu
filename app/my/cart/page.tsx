import React, { useState } from 'react';
import CartItemList from '@/app/ui/composites/cart/cartItemList';
import CustomButton from '@/app/ui/primitives/Button';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '@/app/ui/primitives/Paragraph';
import { FaPlus, FaMinus } from 'react-icons/fa';
import CustomIcon from '@/app/ui/primitives/Icon';

// Define the initial cart items (these could come from a global state or API)
const initialCartItems = [
  {
    id: 1,
    image: '/images/product1.jpg',
    name: 'Product 1',
    quantity: 2,
    price: 50,
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    name: 'Product 2',
    quantity: 1,
    price: 30,
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    name: 'Product 3',
    quantity: 3,
    price: 20,
  },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, action: 'increment' | 'decrement') => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between space-x-4 mb-6">
          <div className="flex-1">
            <CartItemList cartItems={[item]} />
            <div className="flex items-center space-x-2 mt-2">
              <CustomButton
                variant="secondary"
                onClick={() => handleQuantityChange(item.id, 'decrement')}
                className="flex items-center"
              >
                <CustomIcon Icon={FaMinus} size={16} variant="secondary" />
              </CustomButton>
              <Paragraph size="md" className="mx-2">
                {item.quantity}
              </Paragraph>
              <CustomButton
                variant="primary"
                onClick={() => handleQuantityChange(item.id, 'increment')}
                className="flex items-center"
              >
                <CustomIcon Icon={FaPlus} size={16} variant="text" />
              </CustomButton>
            </div>
          </div>
          <Paragraph size="md" className="text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </Paragraph>
        </div>
      ))}

      <div className="mt-8 p-4 bg-gray-100 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <Paragraph size="lg" weight="bold">
            Total Price:
          </Paragraph>
          <Paragraph size="lg" weight="bold">
            ${totalPrice.toFixed(2)}
          </Paragraph>
        </div>
        <CustomButton
          variant="primary"
          className="w-full bg-fd-pink-dark hover:bg-fd-pink-lite"
        >
          Proceed to Checkout
        </CustomButton>
        <div className="mt-4 text-center">
          <CustomLink href="/products" variant="text">
            Continue Shopping
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
