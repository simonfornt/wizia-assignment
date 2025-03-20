import React from 'react';
import FooterLogo from "../assets/Logo.png";

function Footer() {
  return (
    <div className='bg-[#07292F] py-10'>
      <div className='flex flex-col items-center md:flex-row md:justify-between md:mx-20 text-center'>
        <div className='mb-4 md:mb-0'>
          <img src={FooterLogo} alt="Wizia Logo" className='w-32 md:w-40' />
        </div>
        <div className='text-white text-sm md:text-base'>
          Copyright © 2023 Wizia. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;