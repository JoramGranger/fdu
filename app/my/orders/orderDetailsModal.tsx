// OrderDetailsModal.tsx
import React from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Modal from '@/app/ui/composites/modal/modal';
import OrderItemList from '@/app/ui/composites/order/orderItemList'; // Import the OrderItemList component
import { Order } from '@/app/types'; // Import the Order type

interface OrderDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    order: Order | null;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ isOpen, onClose, order }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {order && (
                <div>
                    <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                    <div className="flex flex-col mb-4">
                        <Paragraph size="lg" weight="bold">Order #{order.id}</Paragraph>
                        <Paragraph size="md">Date: {order.date}</Paragraph>
                        <Paragraph size="md">Status: {order.status}</Paragraph>
                        <Paragraph size="md">Total: ${order.total.toFixed(2)}</Paragraph>
                        <Paragraph size="md">Payment Method: {order.paymentMethod}</Paragraph>
                        <Paragraph size="md">Delivery Address: {order.deliveryAddress}</Paragraph>
                    </div>
                    <h4 className="text-lg font-semibold mt-4">Items:</h4>
                    <OrderItemList items={order.items} />
                    <div className="flex justify-end mt-4">
                        <CustomButton variant="secondary" onClick={onClose}>
                            Close
                        </CustomButton>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default OrderDetailsModal;
