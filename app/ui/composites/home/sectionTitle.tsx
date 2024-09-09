import React from "react";

interface SectionTitleProps {
  smallTitle: string;
  largeTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ smallTitle, largeTitle }) => {
  return (
    <div className="flex flex-col items-start space-y-4 mb-8">
      {/* Container for badge and small title */}
      <div className="flex items-center space-x-4">
        {/* Badge */}
        <div className="bg-fd-pink-dark h-10 w-3 rounded-r-md"></div>
        {/* Small Title */}
        <p className="text-base font-medium text-black">{smallTitle}</p>
      </div>
      {/* Large Title */}
      <h2 className="text-3xl font-bold text-black">{largeTitle}</h2>
    </div>
  );
};

export default SectionTitle;
