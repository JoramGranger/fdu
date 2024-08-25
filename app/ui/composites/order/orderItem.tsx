// OrderItem.tsx
import React from 'react';
import Image from 'next/image';
import Paragraph from '@/app/ui/primitives/Paragraph';
import { OrderItem as OrderItemType } from '@/app/types'; // Import the OrderItem type

interface OrderItemProps {
    item: OrderItemType;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row border p-4 rounded-md shadow-sm bg-white">
            <Image src={item.image} alt={item.name} height={60} width={60} className="w-full md:w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4" />
            <div className="flex-1">
                <Paragraph size="lg" weight="bold">{item.name}</Paragraph>
                <Paragraph size="md">{item.description}</Paragraph>
                <Paragraph size="md">Quantity: {item.quantity}</Paragraph>
                <Paragraph size="md">Price: ${item.price.toFixed(2)}</Paragraph>
            </div>
        </div>
    );
};

export default OrderItem;
