// OrderItemList.tsx
import React from 'react';
import OrderItem from './orderItem';
import { OrderItem as OrderItemType } from '@/app/types'; 

interface OrderItemListProps {
    items: OrderItemType[];
}

const OrderItemList: React.FC<OrderItemListProps> = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map(item => (
                <OrderItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default OrderItemList;
