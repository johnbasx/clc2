import { Container } from "@components/Container";
import { Logo } from "@components/Logo";

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
    </footer>
  );
}
