import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import CustomIcon from '@/app/ui/primitives/Icon';
import Paragraph from '@/app/ui/primitives/Paragraph';
import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="flex flex-col items-center bg-transparent p-6 text-white">
      {/* Profile Picture Section */}
      <div className="mb-6">
        <CustomIcon Icon={FaUserCircle} size={100} variant="primary" />
      </div>

      {/* User Information Section */}
      <div className="w-full max-w-md space-y-4">
        <Paragraph size="lg" weight="bold" color="black" className="text-center">
          John Doe
        </Paragraph>

        <Paragraph size="md" weight="medium" color="black">
          Email
        </Paragraph>
        <CustomInput type="email" value="johndoe@example.com" variant="primary" className="bg-gray-900 text-white" readOnly />

        <Paragraph size="md" weight="medium" color="black">
          Phone Number
        </Paragraph>
        <CustomInput type="text" value="+1234567890" variant="primary" className="bg-gray-900 text-white" readOnly />

        <Paragraph size="md" weight="medium" color="black">
          Address
        </Paragraph>
        <CustomInput type="text" value="123 Main Street, City, Country" variant="primary" className="bg-gray-900 text-white" readOnly />
      </div>

      {/* Action Buttons Section */}
      <div className="mt-6 flex space-x-4">
        <CustomButton variant="secondary">Edit Profile</CustomButton>
        <CustomButton variant="danger">Change Password</CustomButton>
      </div>
    </div>
  );
}
