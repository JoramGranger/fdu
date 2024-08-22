import React from 'react';
import { IconType } from 'react-icons';

interface CustomIconProps {
  Icon: IconType;
  size?: string | number;
  variant?: 'primary' | 'secondary' | 'danger' | 'text'; // Define your variants here
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  Icon,
  size = '24',
  variant = 'primary',
  className = '',
}) => {
  const variantColors: { [key: string]: string } = {
    primary: 'text-fd-pink-dark',
    secondary: 'text-fd-pink-lite',
    danger: 'text-red-600',
    text: 'text-black',
  };

  const colorClass = variantColors[variant] || variantColors['primary'];

  return <Icon size={size} className={`${colorClass} ${className}`} />;
};

export default CustomIcon;
