import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: { email: string; phone: string; address: string }) => void;
}

const EditProfileModal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 Main Street, City, Country');

  const handleSave = () => {
    onSave({ email, phone, address });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
        <div className="space-y-4">
          <div>
            <Paragraph size="md" weight="medium" color="black">Email</Paragraph>
            <CustomInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="primary"
            />
          </div>
          <div>
            <Paragraph size="md" weight="medium" color="black">Phone Number</Paragraph>
            <CustomInput
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="primary"
            />
          </div>
          <div>
            <Paragraph size="md" weight="medium" color="black">Address</Paragraph>
            <CustomInput
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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

export default EditProfileModal;
