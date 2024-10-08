import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import CustomIcon from '@/app/ui/primitives/Icon';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import EditProfileModal from './editProfileModal';
import ChangePasswordModal from './changePasswordModal';

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const handleOpenEditProfileModal = () => setIsEditProfileModalOpen(true);
  const handleCloseEditProfileModal = () => setIsEditProfileModalOpen(false);

  const handleOpenChangePasswordModal = () => setIsChangePasswordModalOpen(true);
  const handleCloseChangePasswordModal = () => setIsChangePasswordModalOpen(false);

  const handleSaveProfile = (details: { email: string; phone: string; address: string }) => {
    console.log('Saved details:', details);
  };

  const handleSavePassword = (currentPassword: string, newPassword: string) => {
    // Logic to save the new password
    console.log('Password change:', { currentPassword, newPassword });
  };

  return (
    <div className="flex flex-col bg-transparent p-6 text-white space-y-6 w-full">
      <h2 className="text-3xl text-center font-bold text-black mb-6">My Profile</h2>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-4">
          <Paragraph size="lg" weight="bold" color="black" className="text-center md:text-left">
            Welcome, John Doe
          </Paragraph>
          <div className="relative flex flex-col items-center">
            {profilePicture ? (
              <Image
                src={URL.createObjectURL(profilePicture)}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <CustomIcon Icon={FaUserCircle} size={100} variant="primary" />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profile-picture-input"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="profile-picture-input" className="w-full flex justify-center mt-2">
              <CustomButton variant="primary" className="w-full md:w-auto">
                Change Profile Picture
              </CustomButton>
            </label>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-4">
          <Paragraph size="md" weight="medium" color="black">
            Email
          </Paragraph>
          <CustomInput
            type="email"
            value="johndoe@example.com"
            variant="primary"
            readOnly
          />

          <Paragraph size="md" weight="medium" color="black">
            Phone Number
          </Paragraph>
          <CustomInput
            type="text"
            value="+1234567890"
            variant="primary"
            readOnly
          />

          <Paragraph size="md" weight="medium" color="black">
            Address
          </Paragraph>
          <CustomInput
            type="text"
            value="123 Main Street, City, Country"
            variant="primary"
            readOnly
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <CustomButton variant="secondary" className="w-full md:w-auto" onClick={handleOpenEditProfileModal}>
          Edit Profile
        </CustomButton>
        <CustomButton variant="danger" className="w-full md:w-auto" onClick={handleOpenChangePasswordModal}>
          Change Password
        </CustomButton>
      </div>

      {/* Modals */}
      <EditProfileModal isOpen={isEditProfileModalOpen} onClose={handleCloseEditProfileModal} onSave={handleSaveProfile} />
      <ChangePasswordModal isOpen={isChangePasswordModalOpen} onClose={handleCloseChangePasswordModal} onSave={handleSavePassword} />
    </div>
  );
}
