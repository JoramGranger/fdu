import React from 'react';
import CustomButton from '@/app/ui/primitives/Button';
import CustomInput from '../ui/primitives/Input';
import CustomLink from '@/app/ui/primitives/Link';
import Paragraph from '@/app/ui/primitives/Paragraph';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import CustomIcon from '@/app/ui/primitives/Icon';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
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
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <CustomInput
              type="password"
              placeholder="Password"
              variant="primary"
              className="w-full"
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

        {/* Social Media Login */}
        <div className="flex justify-center items-center mb-4">
          <Paragraph size="sm" className="text-gray-500">
            Or continue with
          </Paragraph>
        </div>
        <div className="flex justify-between items-center">
          <CustomButton variant="secondary" className="w-full mr-2 flex items-center justify-center">
            <CustomIcon Icon={FaGoogle} size={20} />
            <span className="ml-2">Google</span>
          </CustomButton>
          <CustomButton variant="secondary" className="w-full ml-2 flex items-center justify-center">
            <CustomIcon Icon={FaFacebook} size={20} />
            <span className="ml-2">Facebook</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
