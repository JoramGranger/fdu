import React from 'react';
import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'text-fd-pink-dark hover:text-fd-pink-lite hover:scale-105 transition-transform duration-200';
      break;
    case 'secondary':
      variantClasses = 'text-fd-pink-lite hover:text-fd-pink-dark hover:scale-105 transition-transform duration-200';
      break;
    case 'danger':
      variantClasses = 'text-red-500 hover:text-red-700 hover:scale-105 transition-transform duration-200';
      break;
    case 'text':
      variantClasses = 'text-black hover:text-gray-800 hover:scale-105 transition-transform duration-200';
      break;
    default:
      variantClasses = 'text-fd-pink-dark hover:text-fd-pink-lite hover:scale-105 transition-transform duration-200';
      break;
  }

  return (
    <Link {...props} className={`${variantClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
