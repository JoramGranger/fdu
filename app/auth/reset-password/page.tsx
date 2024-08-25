// src/app/reset-password/page.tsx
'use client';
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomLink from '@/app/ui/primitives/Link';
import CustomInput from '@/app/ui/primitives/Input';
import Paragraph from '@/app/ui/primitives/Paragraph';
import AuthFormContainer from '@/app/ui/composites/auth/AuthFormContainer'; // Import the container component

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle password reset logic here
    alert("Your password has been successfully reset.");
  };

  return (
    <AuthFormContainer title="Create New Password">
      <form onSubmit={handleSubmit}>
        {/* New Password Input */}
        <div className="mb-4">
          <CustomInput
            type="password"
            placeholder="New Password"
            variant="primary"
            className="w-full"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <CustomInput
            type="password"
            placeholder="Confirm Password"
            variant="primary"
            className="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Reset Password Button */}
        <div className="mb-4">
          <CustomButton type="submit" variant="primary" className="w-full">
            Reset Password
          </CustomButton>
        </div>
      </form>

      {/* Back to Login Link */}
      <div className="text-center">
        <Paragraph size="sm" className="text-gray-500">
          Remembered your password? 
          <CustomLink href="/auth/login" variant="text" className="ml-2">
            Login
          </CustomLink>
        </Paragraph>
      </div>
    </AuthFormContainer>
  );
};

export default ResetPassword;
