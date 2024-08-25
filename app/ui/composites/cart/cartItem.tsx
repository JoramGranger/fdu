import React from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomIcon from '@/app/ui/primitives/Icon';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Image from 'next/image';

interface CartItemProps {
  image: string;
  name: string;
  quantity: number;
  price: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ image, name, quantity, price, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <Image src={image} height={60} width={60} alt={name} className="w-24 h-24 object-cover" />
      <div className="flex-1">
        <Paragraph size="lg" weight="bold">{name}</Paragraph>
        <div className="flex items-center space-x-2 mt-2">
          <CustomButton
            variant="primary"
            onClick={onDecrement}
            className="flex items-center"
          >
            <CustomIcon Icon={FaMinus} size={16} variant="text" />
          </CustomButton>
          <Paragraph size="md" className="mx-2">
            {quantity}
          </Paragraph>
          <CustomButton
            variant="primary"
            onClick={onIncrement}
            className="flex items-center"
          >
            <CustomIcon Icon={FaPlus} size={16} variant="text" />
          </CustomButton>
        </div>
      </div>
      <Paragraph size="md" className="text-right">
        ${(price * quantity).toFixed(2)}
      </Paragraph>
    </div>
  );
};

export default CartItem;
