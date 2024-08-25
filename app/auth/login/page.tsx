// src/app/login/page.tsx
'use client';
import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '@/app/ui/primitives/Input';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '../../ui/primitives/Paragraph';
import AuthFormContainer from '@/app/ui/composites/auth/AuthFormContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthFormContainer title="Sign in to your account">
      <form>
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

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember Me</span>
          </label>
          <CustomLink href="/auth/forgot-password" variant="text">
            Forgot Password?
          </CustomLink>
        </div>

        {/* Login Button */}
        <div className="mb-4">
          <CustomButton type="submit" variant="primary" className="w-full">
            Login
          </CustomButton>
        </div>
      </form>

      {/* Create Account Link */}
      <div className="text-center">
        <Paragraph size="sm" className="text-gray-500">
          Don't have an account? 
          <CustomLink href="/auth/signup" variant="text" className="ml-2">
            Create an account
          </CustomLink>
        </Paragraph>
      </div>
    </AuthFormContainer>
  );
};

export default Login;
