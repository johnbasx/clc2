import React from "react";
import { Container } from "./Container";
import invitationImage from "@images/CLC2-invitation.png";
import Image from "next/image";

const Invitation = () => {
  return (
    <div className='px-6 mt-4 mb-14'>
      <div className='max-w-3xl mx-auto mb-6 space-y-6 text-left md:text-center'>
        <h1 className='text-5xl font-bold text-left text-transparent md:text-center bg-gradient-to-r from-indigo-600 via-pink-500 to-slate-200 bg-clip-text'>
          Here&apos;s the Invitation
        </h1>
      </div>
      <div className='grid object-cover grid-cols-1 mx-auto overflow-hidden aspect-auto max-w-7xl rounded-[2.5rem] md:rounded-[6rem] shadow-lg'>
        <Image src={invitationImage} alt='CLC2-Invitation' />
      </div>
      {/* <div className='flex items-center justify-center max-w-xl px-6 py-2 mx-auto mt-4'>
        <a
          href='../public/images/CLC2-Invitation.png'
          target='_blank'
          rel='noopener'
          className='w-full max-w-md px-6 py-2 text-sm font-semibold text-center duration-150 rounded-lg bg-slate-200 text-slate-900 md:py-3 hover:bg-slate-300'
        >
          Download Invitation
        </a>
      </div> */}
    </div>
  );
};

export default Invitation;
