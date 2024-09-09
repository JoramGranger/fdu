import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  link: string; // URL or route to navigate to when clicking the card
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, link }) => {
  return (
    <Link href={link}>
      <div className="block border mx-3 h-40 w-40 border-black rounded-lg p-4 flex flex-col items-center justify-center bg-pink-light hover:bg-fd-pink-dark transition-colors duration-300 ease-in-out">
        <div className="text-4xl mb-2 flex items-center justify-center">
          {icon}
        </div>
        <p className="text-md font-medium text-center truncate">{title}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;