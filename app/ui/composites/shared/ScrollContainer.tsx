// components/ScrollContainer.tsx
import React, { useRef } from 'react';
import CustomButton from '../../primitives/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ScrollContainerProps {
  children: React.ReactNode;
  scrollAmount?: number; // Amount to scroll on button click
  buttonSize?: number;   // Size of the arrow buttons
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  scrollAmount = 300,
  buttonSize = 18,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="flex justify-end gap-4 mb-4">
        {/* Left Arrow Button */}
        <CustomButton variant="section" onClick={scrollLeft}>
          <FaArrowLeft size={buttonSize} />
        </CustomButton>

        {/* Right Arrow Button */}
        <CustomButton variant="section" onClick={scrollRight}>
          <FaArrowRight size={buttonSize} />
        </CustomButton>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;
