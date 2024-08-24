import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
  className?: string; // New className prop for additional styling
}

const CustomInput: React.FC<InputProps> = ({ variant = 'primary', className, ...props }) => {
  
  const baseStyles = 'text-black border-0 border-b-2 p-2 focus:outline-none';
  // const baseStyles = 'border-0 border-b-2 p-2 focus:outline-none focus:ring-1';
  const variantStyles = clsx({
    'bg-transparent border-b-black focus:border-b-fd-pink-dark': variant === 'primary',
    'border-b-fd-pink-lite focus:ring-fd-pink-lite': variant === 'secondary',
    'border-b-red-500 focus:ring-red-500': variant === 'danger',
    'border-b-transparent focus:ring-black': variant === 'text',
  });

  return (
    <input
      className={clsx(baseStyles, variantStyles, className)} // Combine base, variant, and custom classes
      {...props}
    />
  );
};

export default CustomInput;