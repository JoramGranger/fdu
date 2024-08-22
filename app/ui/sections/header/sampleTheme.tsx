'use client'
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import Button from "../../primitives/Button";
import Input from "../../primitives/Input";
import CustomLink from "../../primitives/Link";
import CustomIcon from "../../primitives/Icon";

export default function Navbar ()  {

  const [searchTerm, setSearchTerm] = useState('');

    return (
      <nav className="space-x-4">
      <CustomLink href="/" variant="primary">
        Home
      </CustomLink>
      <CustomLink href="/about" variant="secondary">
        About
      </CustomLink>
      <CustomLink href="/contact" variant="danger">
        Contact
      </CustomLink>
      <CustomLink href="/blog" variant="text">
        Blog
      </CustomLink>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button variant="primary">
            Primary
          </Button>
          <Button variant="secondary">
            secondary
          </Button>
          <Button variant="danger">
            danger
          </Button>

          <form className="space-y-4">
            <Input variant="primary" placeholder="Email" type="email" />
            <Input variant="primary" placeholder="Password" type="password" />
            <Button type="submit" variant="primary">
              Login
            </Button>
          </form>

          <div className="flex space-x-4">
            <CustomIcon Icon={FaUser} size="30" variant="primary" />
            <CustomIcon Icon={FaUser} size="30" variant="secondary" />
            <CustomIcon Icon={FaUser} size="30" variant="danger" />
            <CustomIcon Icon={FaUser} size="30" variant="text" />
          </div>
            
        </div>
      </div>


    </nav>
  );
}