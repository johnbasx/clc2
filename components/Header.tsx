import { ButtonLink } from "@components/ButtonLink";
import { Container } from "@components/Container";
import { Logo } from "@components/Logo";

export function Header() {
  return (
    <header className='relative z-50 pb-11 lg:pt-11'>
      <Container className='flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap'>
        <div className='mt-10 lg:mt-0 lg:grow lg:basis-0'>
          <Logo className='w-auto h-40 md:h-12 text-slate-900' />
        </div>
        <div className='flex flex-auto order-first py-4 -mx-4 overflow-x-auto font-mono text-sm text-transparent border-b bg-gradient-to-r from-yellow-300 via-slate-100 to-purple-300 bg-clip-text basis-full whitespace-nowrap border-blue-600/10 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0'>
          <div className='flex flex-col items-center px-4 mx-auto space-x-4 space-y-1 text-center jusify-center'>
            <p className='text-lg'>
              <time dateTime='10:00 am IST'>10:00 AM </time> -
              <time dateTime='2024-01-13'> 13 January, 2023</time>
            </p>

            <p>Polytechnic Hall, MTU</p>
          </div>
        </div>
        <div className='hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end'>
          <ButtonLink href='https://forms.gle/bMvNmF7mLEbaG7q98'>
            Register Now
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
