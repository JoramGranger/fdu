// components/CategoriesSection.tsx
import React from 'react';
import { FaPaintBrush } from 'react-icons/fa'; // Using react-icons for arrows
import CategoryCard from '@/app/ui/composites/home/CategoryCard';
import SectionTitle from '../../composites/home/sectionTitle';
import ScrollContainer from '../../composites/shared/ScrollContainer';

const CategoriesSection = () => {
  const categories = [
    { icon: <FaPaintBrush />, title: 'Acne', link: '/categories/acne' },
    { icon: <FaPaintBrush />, title: 'Hyperpigmentation', link: '/categories/hyperpigmentation' },
    { icon: <FaPaintBrush />, title: 'Even Skin Tone', link: '/categories/even-skin-tone' },
    { icon: <FaPaintBrush />, title: 'Open Pores', link: '/categories/open-pores' },
    { icon: <FaPaintBrush />, title: 'Stretch Marks', link: '/categories/stretch-marks' },
    { icon: <FaPaintBrush />, title: 'Acne', link: '/categories/acne' },
    { icon: <FaPaintBrush />, title: 'Hyperpigmentation', link: '/categories/hyperpigmentation' },
    { icon: <FaPaintBrush />, title: 'Even Skin Tone', link: '/categories/even-skin-tone' },
    { icon: <FaPaintBrush />, title: 'Open Pores', link: '/categories/open-pores' },
    { icon: <FaPaintBrush />, title: 'Stretch Marks', link: '/categories/stretch-marks' },
  ];

  return (
    <div className="relative my-32 px-32 rounded-lg">
      <SectionTitle smallTitle="categories" largeTitle="Shop By Category" />
      <ScrollContainer scrollAmount={300} buttonSize={18}>
        {categories.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} title={category.title} link={category.link} />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default CategoriesSection;
