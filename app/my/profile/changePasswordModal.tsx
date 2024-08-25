import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Modal from '@/app/ui/composites/modal/modal'

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (passwords: { currentPassword: string; newPassword: string }) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose, onSave }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({ currentPassword, newPassword });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Change Password">
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex justify-center space-x-4 mt-4">
          <CustomButton variant="secondary" onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton type="submit" variant="primary">
            Save
          </CustomButton>
        </div>
      </form>
    </Modal>
  );
};

export default ChangePasswordModal;
