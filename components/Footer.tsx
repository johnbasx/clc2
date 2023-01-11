import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import Image from "next/image";
import foxbetaLogoLight from "@images/foxbeta-w.png";

export function Footer() {
  return (
    <footer className='py-16'>
      <Container className='flex flex-col items-center justify-between md:flex-row'>
        <Logo className='w-auto h-12 text-slate-900' />
        <p className='mt-6 text-base text-center text-slate-300 md:mt-0'>
          Copyright &copy; {new Date().getFullYear()} CLC2,{" "}
          <span className='font-semibold'>Foxbeta Pvt Ltd.</span> All rights
          reserved.
        </p>
      </Container>
      <Container className='flex items-center justify-center mt-8'>
        <div className='space-y-3 text-center text-slate-300'>
          <h5 className='text-xs font-semibold tracking-widest uppercase'>
            Powered by
          </h5>
          <div>
            <Image
              alt='Foxbeta Pvt Ltd'
              src={foxbetaLogoLight}
              className='w-auto h-16 md:h-18 drop-shadow-3xl'
              unoptimized
              priority
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
