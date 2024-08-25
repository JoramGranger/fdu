import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (passwords: { currentPassword: string; newPassword: string }) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose, onSave }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    onSave({ currentPassword, newPassword });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size="md" weight="medium" color="black">Current Password</Paragraph>
            <CustomInput
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              variant="primary"
            />
          </div>
          <div>
            <Paragraph size="md" weight="medium" color="black">New Password</Paragraph>
            <CustomInput
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              variant="primary"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <CustomButton variant="secondary" onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton variant="primary" onClick={handleSave}>
            Save
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
