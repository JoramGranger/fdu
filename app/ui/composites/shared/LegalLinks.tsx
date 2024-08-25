// src/app/ui/components/LegalLinks.tsx
import React from 'react';
import CustomLink from '@/app/ui/primitives/Link'; // Adjust the import path if necessary
import Paragraph from '@/app/ui/primitives/Paragraph'; // Adjust the import path if necessary

const LegalLinks: React.FC = () => {
  return (
    <div className="w-full max-w-md mt-4 flex justify-end">
      <Paragraph size="sm" className="text-gray-500 flex space-x-2">
        <CustomLink href="/legal/privacy-policy" variant="text">
          Privacy
        </CustomLink>
        <CustomLink href="/legal/terms-and-conditions" variant="text">
          Terms
        </CustomLink>
      </Paragraph>
    </div>
  );
};

export default LegalLinks;
