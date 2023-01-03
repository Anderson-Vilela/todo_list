import React from 'react';
import { Rocket } from 'phosphor-react';

const Header = () => (
  <header className='flex h-[20rem] items-center justify-center bg-gray-700'>
    <div className='flex items-center justify-center gap-2 text-4xl'>
      <Rocket size={21} color='#4EA8DE' />
      <div className='font-bold'>
        <span className='text-blue'>to</span>
        <span className='text-purple'>do</span>
      </div>
    </div>
  </header>
);

export default Header;
