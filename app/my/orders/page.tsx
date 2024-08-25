// OrderPage.tsx
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import Paragraph from '@/app/ui/primitives/Paragraph';
import OrderDetailsModal from './orderDetailsModal'
import { Order } from '@/app/types';

const initialOrders: Order[] = [
    {
        id: 1,
        date: '2024-08-01',
        status: 'Shipped',
        total: 29.99,
        paymentMethod: 'Credit Card',
        deliveryAddress: '123 Main Street, City, Country',
        items: [
            { id: 1, name: 'Product A', description: 'A great product', quantity: 1, price: 29.99, image: '/path/to/product-a.jpg' },
        ],
    },
    {
        id: 2,
        date: '2024-08-05',
        status: 'Pending',
        total: 49.99,
        paymentMethod: 'PayPal',
        deliveryAddress: '456 Business Road, City, Country',
        items: [
            { id: 2, name: 'Product B', description: 'Another product', quantity: 2, price: 24.99, image: '/path/to/product-b.jpg' },
            { id: 3, name: 'Product C', description: 'Yet another product', quantity: 1, price: 19.99, image: '/path/to/product-c.jpg' },
        ],
    },
    {
        id: 3,
        date: '2024-08-10',
        status: 'Delivered',
        total: 19.99,
        paymentMethod: 'Bank Transfer',
        deliveryAddress: '789 Another Street, City, Country',
        items: [
            { id: 4, name: 'Product D', description: 'Different product', quantity: 1, price: 19.99, image: '/path/to/product-d.jpg' },
        ],
    },
];

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>(initialOrders);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'shipped'>('all');

    const filteredOrders = orders.filter(order =>
        activeTab === 'all' || order.status.toLowerCase() === activeTab
    );

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>

            <div className="mb-4">
                <div className="flex space-x-2">
                    <CustomButton
                        variant={activeTab === 'all' ? 'primary' : 'secondary'}
                        onClick={() => setActiveTab('all')}
                    >
                        All Orders
                    </CustomButton>
                    <CustomButton
                        variant={activeTab === 'pending' ? 'primary' : 'secondary'}
                        onClick={() => setActiveTab('pending')}
                    >
                        Pending
                    </CustomButton>
                    <CustomButton
                        variant={activeTab === 'shipped' ? 'primary' : 'secondary'}
                        onClick={() => setActiveTab('shipped')}
                    >
                        Shipped
                    </CustomButton>
                </div>
            </div>

            <div className="space-y-4">
                {filteredOrders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-md shadow-sm bg-white">
                        <div className="flex flex-col md:flex-row items-start justify-between">
                            <div className="flex-1">
                                <Paragraph size="lg" weight="bold" color="black">Order #{order.id}</Paragraph>
                                <Paragraph size="md">Date: {order.date}</Paragraph>
                                <Paragraph size="md">Status: {order.status}</Paragraph>
                                <Paragraph size="md">Total: ${order.total.toFixed(2)}</Paragraph>
                                <Paragraph size="md">Payment Method: {order.paymentMethod}</Paragraph>
                                <Paragraph size="md">Delivery Address: {order.deliveryAddress}</Paragraph>
                            </div>
                            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
                                <CustomButton
                                    variant="primary"
                                    onClick={() => handleViewDetails(order)}
                                    className="w-full md:w-auto"
                                >
                                    View Details
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <OrderDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} order={selectedOrder} />
        </div>
    );
};

export default OrderPage;
