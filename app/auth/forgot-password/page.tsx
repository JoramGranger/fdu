// src/app/forgot-password/page.tsx
'use client';
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '@/app/ui/primitives/Paragraph';
import AuthFormContainer from '@/app/ui/composites/auth/AuthFormContainer'; // Import the container component

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle forgot password logic here
    alert("Password reset instructions have been sent to your email.");
  };

  return (
    <AuthFormContainer title="Enter your registered email">
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <CustomInput
            type="email"
            placeholder="Email"
            variant="primary"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Reset Password Button */}
        <div className="mb-4">
          <CustomButton type="submit" variant="primary" className="w-full">
            Send Reset Instructions
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

export default ForgotPassword;
