import React from 'react';

interface ReviewOrderProps {
  nextStep: () => void;
  prevStep: () => void;
}

const ReviewOrder: React.FC<ReviewOrderProps> = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
      <div className="mb-4">
        {/* Replace this with your actual order summary */}
        <p>Order Summary:</p>
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
          Back to Payment
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Continue to Place Order
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
