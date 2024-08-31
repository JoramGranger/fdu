import React from 'react';

interface PlaceOrderProps {
  handleCheckoutComplete: () => void;
  prevStep: () => void;
}

const PlaceOrder: React.FC<PlaceOrderProps> = ({ handleCheckoutComplete, prevStep }) => {
  const handlePlaceOrder = () => {
    // Logic to place the order
    handleCheckoutComplete();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
      <div className="mb-4">
        {/* Replace this with your actual order summary */}
        <p>Final Order Summary:</p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Back to Review Order
        </button>
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
