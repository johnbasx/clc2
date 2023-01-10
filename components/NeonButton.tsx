import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

const NeonButton = () => {
  return (
    <div className='block pt-10 pb-6 md:hidden'>
      <div className='grid items-start justify-center grid-cols-1 gap-8'>
        <div className='relative group'>
          <div className='absolute transition duration-1000 rounded-lg opacity-75 -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 blur group-hover:opacity-100 group-hover:duration-200 animate-pulse'></div>
          <a
            href='https://forms.gle/bMvNmF7mLEbaG7q98'
            target='_blank'
            rel='noopener noreferrer'
            className='relative flex items-center justify-center w-full py-4 space-x-1 leading-none text-center text-gray-100 transition duration-200 rounded-lg bg-gradient-to-r from-black via-slate-800 to-slate-900 px-7 group-hover:text-blue-200'
          >
            <span className='font-semibold '>Register Now</span>
            <TbArrowNarrowRight className='w-5 h-5' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeonButton;
