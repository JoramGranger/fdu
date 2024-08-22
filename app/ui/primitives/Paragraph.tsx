// components/Paragraph.tsx

import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'bold';
  color?: 'fd-pink-lite' | 'fd-pink-dark' | 'black';
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'md',
  weight = 'normal',
  color = 'black',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  const colorStyles = {
    'fd-pink-lite': 'text-fd-pink-lite',
    'fd-pink-dark': 'text-fd-pink-dark',
    'black': 'text-black',
  };

  return (
    <p
      className={`${sizeStyles[size]} ${weightStyles[weight]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
