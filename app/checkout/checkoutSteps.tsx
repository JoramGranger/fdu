import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Payment from './payment';
import PlaceOrder from './placeOrder';
import ReviewOrder from './reviewOrder';
import Shipping from './shipping';
import CustomButton from '../ui/primitives/Button';

const CheckoutSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCheckoutComplete = () => {
    router.push('/order-confirmation');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Shipping nextStep={nextStep} />;
      case 1:
        return <Payment nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <ReviewOrder nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PlaceOrder handleCheckoutComplete={handleCheckoutComplete} prevStep={prevStep} />;
      default:
        return <Shipping nextStep={nextStep} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Step indicators */}
      <div className="flex justify-between mb-8">
        {['Shipping', 'Payment', 'Review Order', 'Place Order'].map((step, index) => (
          <div
            key={index}
            className={`text-sm font-medium ${
              currentStep === index ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {renderStep()}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button
            onClick={nextStep}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button
            onClick={handleCheckoutComplete}
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Complete Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
