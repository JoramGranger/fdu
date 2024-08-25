// src/app/signup/page.tsx
'use client';
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '@/app/ui/primitives/Paragraph';
import AuthFormContainer from '@/app/ui/composites/auth/AuthFormContainer'; // Import the container component

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!agreement) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    // Handle signup logic here
  };

  return (
    <AuthFormContainer title="Create your account">
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <CustomInput
            type="text"
            placeholder="Name"
            variant="primary"
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        {/* Password Input */}
        <div className="mb-4">
          <CustomInput
            type="password"
            placeholder="Password"
            variant="primary"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreement"
            className="mr-2"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label htmlFor="agreement" className="text-gray-500">
            I agree to the
            <CustomLink href="/legal/terms-and-conditions" variant="text" className="ml-1">
              Terms and Conditions
            </CustomLink> and
            <CustomLink href="/legal/privacy-policy" variant="text" className="ml-1">
              Privacy Policy
            </CustomLink>.
          </label>
        </div>

        {/* Signup Button */}
        <div className="mb-4">
          <CustomButton type="submit" variant="primary" className="w-full">
            Signup
          </CustomButton>
        </div>
      </form>

      {/* Already have an account Link */}
      <div className="text-center">
        <Paragraph size="sm" className="text-gray-500">
          Already have an account? 
          <CustomLink href="/auth/login" variant="text" className="ml-2">
            Login
          </CustomLink>
        </Paragraph>
      </div>
    </AuthFormContainer>
  );
};

export default Signup;