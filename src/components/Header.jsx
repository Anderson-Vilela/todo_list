import React from 'react';
import { FunnelSimple, Rocket } from 'phosphor-react';

const Header = () => (
  <header className='flex h-[20rem] items-center justify-center bg-gray-700'>
    <div className='flex items-center justify-center gap-2 text-4xl'>
      <div className='grid justify-items-center '>
        <Rocket size={32} color='#4EA8DE' />
        <FunnelSimple size={16} color='#8080ff' />
      </div>
      <div className='text-[4rem] font-bold'>
        <span className='text-blue'>to</span>
        <span className='text-purple'>do</span>
      </div>
    </div>
  </header>
);

export default Header;
