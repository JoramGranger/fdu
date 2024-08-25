import React from 'react';
import Logo from '@/app/ui/composites/shared/LogoComponent'; 
import LegalLinks from '@/app/ui/composites/shared/LegalLinks'; 
import Paragraph from '@/app/ui/primitives/Paragraph'; 

interface AuthFormContainerProps {
  title: string;
  children: React.ReactNode;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-fd-pink-lite px-4">
      <div className="w-full max-w-md bg-fd-pink-lite p-8 shadow-md rounded-md border border-fd-pink-dark">
        {/* Logo */}
        <Logo />

        {/* Title */}
        <Paragraph size="lg" weight="bold" className="text-center mb-6">
          {title}
        </Paragraph>

        {/* Form Content */}
        {children}

      </div>
      {/* Privacy Policy & Terms & Conditions Links */}
      <LegalLinks />
    </div>
  );
};

export default AuthFormContainer;
