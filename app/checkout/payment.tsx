import React from 'react';

interface PaymentProps {
  nextStep: () => void;
  prevStep: () => void;
}

const Payment: React.FC<PaymentProps> = ({ nextStep, prevStep }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment form submission
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Expiration Date</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue to Review Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
