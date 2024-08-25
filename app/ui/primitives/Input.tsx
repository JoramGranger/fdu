import React, { useState } from 'react';
import clsx from 'clsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
  className?: string;
}

const CustomInput: React.FC<InputProps> = ({ variant = 'primary', className, type = 'text', ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const baseStyles = 'border-0 border-b-2 p-2 focus:outline-none bg-transparent w-full';
  const variantStyles = clsx({
    'border-b-black focus:border-b-fd-pink-dark': variant === 'primary',
    'border-b-fd-pink-lite focus:ring-fd-pink-lite': variant === 'secondary',
    'border-b-red-500 focus:ring-red-500': variant === 'danger',
    'border-b-transparent focus:ring-black': variant === 'text',
  });

  return (
    <div className="relative w-full">
      <input
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        className={clsx(baseStyles, variantStyles, className)}
        {...props}
      />
      {type === 'password' && (
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
