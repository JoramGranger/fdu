import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Modal from '@/app/ui/composites/modal/modal'; // Import the new Modal component

interface Address {
  id: number;
  label: string;
  address: string;
}

const AddressBook: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: 'Home', address: '123 Main Street, City, Country' },
    { id: 2, label: 'Office', address: '456 Business Road, City, Country' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentAddressId, setCurrentAddressId] = useState<number | null>(null);
  const [formValues, setFormValues] = useState({ label: '', address: '' });

  const handleAddOrUpdateAddress = () => {
    if (isEditMode && currentAddressId !== null) {
      setAddresses(addresses.map((address) =>
        address.id === currentAddressId
          ? { ...address, ...formValues }
          : address
      ));
    } else {
      setAddresses([...addresses, { id: addresses.length + 1, ...formValues }]);
    }
    resetForm();
    setIsModalOpen(false);
  };

  const handleEditClick = (address: Address) => {
    setFormValues({ label: address.label, address: address.address });
    setCurrentAddressId(address.id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const resetForm = () => {
    setFormValues({ label: '', address: '' });
    setCurrentAddressId(null);
    setIsEditMode(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Address Book</h2>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="p-4 border rounded-md shadow-sm flex flex-col md:flex-row items-start justify-between">
            <div className="flex-1">
              <Paragraph size="lg" weight="bold" color="black">{address.label}</Paragraph>
              <Paragraph size="md">{address.address}</Paragraph>
            </div>
            {/* <div className="mt-4 flex flex-col md:flex-row md:space-x-2 md:mt-0 w-full md:w-auto"> */}
            <div className="flex flex-row space-x-2 gap-4 w-full md:w-auto mt-2">
              <CustomButton 
                variant="secondary" 
                onClick={() => handleEditClick(address)}
                className="w-full md:w-1/2 mb-2 md:mb-0"
              >
                Edit
              </CustomButton>
              <CustomButton 
                variant="danger" 
                onClick={() => handleDeleteClick(address.id)}
                className="w-full md:w-1/2"
              >
                Delete
              </CustomButton>
            </div>
          {/* </div> */}

          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <CustomButton variant="primary" onClick={() => {
          resetForm();
          setIsModalOpen(true);
        }}>
          Add New Address
        </CustomButton>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-xl font-semibold mb-4">{isEditMode ? 'Edit Address' : 'Add Address'}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddOrUpdateAddress();
          }}
          className="space-y-4"
        >
          <div>
            <Paragraph size="md" weight="medium" color="black">Label</Paragraph>
            <CustomInput
              type="text"
              value={formValues.label}
              onChange={(e) => setFormValues({ ...formValues, label: e.target.value })}
              variant="primary"
              placeholder="Address Label"
            />
          </div>
          <div>
            <Paragraph size="md" weight="medium" color="black">Address</Paragraph>
            <CustomInput
              type="text"
              value={formValues.address}
              onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
              variant="primary"
              placeholder="Full Address"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <CustomButton variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </CustomButton>
            <CustomButton type="submit" variant="primary">
              {isEditMode ? 'Update' : 'Save'}
            </CustomButton>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddressBook;
