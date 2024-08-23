// src/components/ui/Button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;  // New className prop
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled = false,
  className,  // Accepting className as a prop
}) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold focus:outline-none';

  const variantStyles = clsx({
    'bg-black text-fd-pink-lite hover:bg-gray-800': variant === 'primary',
    'bg-fd-pink-lite text-black outline hover:bg-fd-pink-dark': variant === 'secondary',
    'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
  });

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variantStyles, disabledStyles, className)}  // Applying the custom className
    >
      {children}
    </button>
  );
};

export default CustomButton;