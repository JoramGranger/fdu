import React from 'react';

interface ShippingProps {
  nextStep: () => void;
}

const Shipping: React.FC<ShippingProps> = ({ nextStep }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle shipping form submission
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default Shipping;
