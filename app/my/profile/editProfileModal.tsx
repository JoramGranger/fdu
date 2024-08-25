import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Modal from '@/app/ui/composites/modal/modal';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: { email: string; phone: string; address: string }) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, onSave }) => {
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 Main Street, City, Country');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({ email, phone, address });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile">
      <form onSubmit={handleSubmit} className="space-y-4">
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

export default EditProfileModal;
