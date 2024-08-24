// ui/PrimitiveComponents/Input.tsx

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
}

const CustomInput: React.FC<InputProps> = ({ variant = 'primary', ...props }) => {
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'border-fd-pink-dark focus:ring-fd-pink-dark';
      break;
    case 'secondary':
      variantClasses = 'border-fd-pink-lite focus:ring-fd-pink-lite';
      break;
    case 'danger':
      variantClasses = 'border-red-500 focus:ring-red-500';
      break;
    case 'text':
      variantClasses = 'border-transparent focus:ring-black';
      break;
    default:
      variantClasses = 'border-fd-pink-dark focus:ring-fd-pink-dark';
      break;
  }

  return (
    <input
      className={`border-2 rounded-lg p-2 focus:outline-none focus:ring-2 ${variantClasses}`}
      {...props}
    />
  );
};

export default CustomInput;
