import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex justify-center mb-6'>
      <Image
        src="/assets/app-logo-compressed-black.png"
        alt="Fortune Derma logo"
        width={100}
        height={40}
        style={{ height: '40', width: 'auto'}}
      />
    </div>
  );
};

export default Logo;
