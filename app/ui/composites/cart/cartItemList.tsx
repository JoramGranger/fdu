import React from 'react';
import CartItem from './cartItem';

interface CartItemType {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartItemListProps {
  cartItems: CartItemType[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const CartItemList: React.FC<CartItemListProps> = ({ cartItems, onIncrement, onDecrement }) => {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onIncrement={() => onIncrement(item.id)}
          onDecrement={() => onDecrement(item.id)}
        />
      ))}
    </div>
  );
};

export default CartItemList;
