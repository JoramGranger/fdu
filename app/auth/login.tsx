import React, { useState } from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '../ui/primitives/Input';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '@/app/ui/primitives/Paragraph';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-fd-pink-lite px-4">
      <div className="w-full max-w-md bg-fd-pink-lite p-8 shadow-md rounded-md border border-fd-pink-dark">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/app-logo-compressed-black.png"
            alt="Logo"
            width={100}
            height={40}
            style={{ height: '40px', width: 'auto' }}
          />
        </div>

        {/* Title */}
        <Paragraph size="lg" weight="bold" className="text-center mb-6">
          Sign in to your account
        </Paragraph>

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
            <CustomLink href="/forgot-password" variant="text">
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
            <CustomLink href="/create-account" variant="text" className="ml-2">
              Create an account
            </CustomLink>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Login;
