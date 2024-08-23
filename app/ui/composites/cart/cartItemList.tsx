import React from 'react';
import CartItem from './cartItem';

interface CartItemType {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartItemListProps {
  cartItems: CartItemType[];
}

const CartItemList: React.FC<CartItemListProps> = ({ cartItems }) => {
  return (
    <div className="space-y-4">
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CartItemList;
