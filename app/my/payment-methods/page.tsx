// PaymentMethod.tsx
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import Paragraph from '@/app/ui/primitives/Paragraph';

// Define the type for a payment method
interface PaymentMethod {
    id: number;
    type: 'card' | 'mobile'; // Add type to distinguish between card and mobile money
    cardNumber?: string;
    cardHolderName?: string;
    expiryDate?: string;
    mobileNumber?: string; // For mobile money
    isDefault: boolean;
}

// Sample data for payment methods
const initialPaymentMethods: PaymentMethod[] = [
    { id: 1, type: 'card', cardNumber: '**** **** **** 1234', cardHolderName: 'John Doe', expiryDate: '12/25', isDefault: true },
    { id: 2, type: 'card', cardNumber: '**** **** **** 5678', cardHolderName: 'Jane Smith', expiryDate: '08/24', isDefault: false },
    { id: 3, type: 'mobile', mobileNumber: '+256701234567', isDefault: false },
];

const PaymentMethod: React.FC = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(initialPaymentMethods);
    const [newPayment, setNewPayment] = useState<PaymentMethod | null>(null);

    const handleAddPaymentMethod = () => {
        if (newPayment) {
            setPaymentMethods([...paymentMethods, { ...newPayment, id: paymentMethods.length + 1, isDefault: false }]);
            setNewPayment(null); // Clear new payment input
        }
    };

    const handleSetDefault = (id: number) => {
        setPaymentMethods(paymentMethods.map(pm =>
            pm.id === id ? { ...pm, isDefault: true } : { ...pm, isDefault: false }
        ));
    };

    const handleRemovePaymentMethod = (id: number) => {
        setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>

            <div className="space-y-4">
                {paymentMethods.length === 0 ? (
                    <Paragraph size="lg">No payment methods available.</Paragraph>
                ) : (
                    paymentMethods.map(method => (
                        <div key={method.id} className="flex flex-col border p-4 rounded-md shadow-sm bg-white">
                            {method.type === 'card' ? (
                                <>
                                    <Paragraph size="lg" weight="bold">{method.cardHolderName}</Paragraph>
                                    <Paragraph size="md">Card Number: {method.cardNumber}</Paragraph>
                                    <Paragraph size="md">Expiry Date: {method.expiryDate}</Paragraph>
                                </>
                            ) : (
                                <>
                                    <Paragraph size="lg" weight="bold">Mobile Money</Paragraph>
                                    <Paragraph size="md">Mobile Number: {method.mobileNumber}</Paragraph>
                                </>
                            )}
                            <div className="mt-4 flex space-x-2 gap-2">
                                <CustomButton 
                                    variant={method.isDefault ? "secondary" : "primary"} 
                                    onClick={() => handleSetDefault(method.id)}
                                >
                                    {method.isDefault ? "Default Payment Method" : "Set as Default"}
                                </CustomButton>
                                <CustomButton variant="secondary" onClick={() => handleRemovePaymentMethod(method.id)}>
                                    Remove
                                </CustomButton>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-6 border-t pt-4">
                <h3 className="text-xl font-bold mb-4">Add New Payment Method</h3>
                <div className="space-y-4">
                    <select
                        value={newPayment?.type || ''}
                        onChange={(e) => setNewPayment(prev => ({ ...prev, type: e.target.value as 'card' | 'mobile' }))}
                        className="border p-2 rounded-md w-full"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="card">Card</option>
                        <option value="mobile">Mobile Money</option>
                    </select>

                    {newPayment?.type === 'card' && (
                        <>
                            <input
                                type="text"
                                placeholder="Card Number"
                                value={newPayment?.cardNumber || ''}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, cardNumber: e.target.value }))}
                                className="border p-2 rounded-md w-full"
                            />
                            <input
                                type="text"
                                placeholder="Card Holder Name"
                                value={newPayment?.cardHolderName || ''}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, cardHolderName: e.target.value }))}
                                className="border p-2 rounded-md w-full"
                            />
                            <input
                                type="text"
                                placeholder="Expiry Date (MM/YY)"
                                value={newPayment?.expiryDate || ''}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, expiryDate: e.target.value }))}
                                className="border p-2 rounded-md w-full"
                            />
                        </>
                    )}

                    {newPayment?.type === 'mobile' && (
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={newPayment?.mobileNumber || ''}
                            onChange={(e) => setNewPayment(prev => ({ ...prev, mobileNumber: e.target.value }))}
                            className="border p-2 rounded-md w-full"
                        />
                    )}

                    <div className="mt-4">
                        <CustomButton variant="primary" onClick={handleAddPaymentMethod}>
                            Add Payment Method
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
