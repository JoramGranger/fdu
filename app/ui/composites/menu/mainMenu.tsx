// src/components/ui/MainMenu.tsx
import React from 'react';
import CustomButton from '../../primitives/Button';
import CustomLink from '../../primitives/Link';

interface MainMenuProps {
  user: string | null;
  onClose?: () => void; // Optional, used for closing mobile menu
  variant: 'desktop' | 'mobile'; // Use 'desktop' or 'mobile' for different layouts
}

const MainMenu: React.FC<MainMenuProps> = ({ user, onClose, variant }) => {
  const handleLinkClick = () => {
    if (onClose) {
      onClose(); // Close the menu if it's open on mobile
    }
  };

  return (
    <div className={variant === 'mobile' ? 'flex flex-col p-4 space-y-4' : 'hidden md:flex items-center bg-fd-pink-lite gap-4 space-x-4 ml-8'}>
      <CustomLink href="/" variant="text" onClick={handleLinkClick}>
        Home
      </CustomLink>
      <CustomLink href="/" variant="text" onClick={handleLinkClick}>
        Shop
      </CustomLink>
      <CustomLink href="/" variant="text" onClick={handleLinkClick}>
        Contact
      </CustomLink>
      <CustomLink href="/" variant="text" onClick={handleLinkClick}>
        About
      </CustomLink>
      {user ? (
        <CustomLink href="/" variant="text" onClick={handleLinkClick}>
          Logout
        </CustomLink>
      ) : (
        <>
          <CustomButton variant="primary" onClick={handleLinkClick}>
            Login
          </CustomButton>
          <CustomLink href="/" variant="text" onClick={handleLinkClick}>
            Signup
          </CustomLink>
        </>
      )}
    </div>
  );
};

export default MainMenu;
