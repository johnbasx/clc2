import Image from "next/image";

import { ButtonLink } from "@components/ButtonLink";
import { Container } from "@components/Container";
import backgroundImage from "@images/CLC2-blur-01.png";
import { Speakers } from "./Speakers";

export function Hero() {
  return (
    <div className='relative pt-10 pb-20 bg-opacity-25 bg-center bg-no-repeat bg-contain sm:py-24 bg-hero-blur'>
      <div className='absolute overflow-hidden backdrop-blur-xl -inset-x-0 -top-48 -bottom-14'>
        {/* <div className='absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]'>
          <div className='relative object-contain'>
            <Image
              src={backgroundImage}
              alt='CLC2 blur image'
              width={1524}
              className='aspect-square'
              height={2058}
              priority
              unoptimized
            />
          </div>
        </div> */}
        {/* <div className='relative flex items-center justify-center opacity-50'>
          <Image
            alt='CLC2 blur image'
            src={backgroundImage}
            width={1024}
            height={1024}
          />
        </div> */}
        {/* <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white' />
        <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white' /> */}
      </div>
      <Container className='relative'>
        <div className='max-w-2xl mx-auto lg:max-w-4xl lg:px-12'>
          <h1 className='text-5xl font-bold tracking-tighter text-transparent bg-gradient-to-r from-yellow-300 to-indigo-500 bg-clip-text font-display sm:text-7xl'>
            Corporate Leaders Conclave 2023
          </h1>
          <div className='mt-6 space-y-6 text-blue-50 font-display'>
            <p>
              We welcome you all to the second edition of "CLC - Corporate
              Leaders Conclave". The CLC is an exclusive platform for
              corporates, entrepreneurs, students and teachers, held as part of
              the summit designed to bring together business leaders to discuss
              effective strategies, promote efficient practices, solve certain
              problems and make a business case for sustainable solutions. The
              Conclave with the presence of corporate leaders along with
              motivational speakers will help expound further on how businesses
              can be made profitable provided they remain responsible as well.
            </p>
            <h2 className='text-3xl font-semibold text-slate-100'>
              Impact on students
            </h2>
            <p>
              Organizing such summits and getting a chance to take advice from
              Corporate leaders helps students immensely as students get early
              exposure to understand Industrial dynamics as well as business
              strategy. It is a great kick start for the youths to accomplish
              their goals and will help their energy and enthusiasm to go in the
              right direction.
            </p>
          </div>
          <ButtonLink href='#' className='w-full mt-10 sm:hidden'>
            Join us now
          </ButtonLink>
          <dl className='grid grid-cols-2 mt-10 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left'>
            {[
              ["Speakers", "6"],
              ["People Attending", "359+"],
              ["Venue", "Polytechnic Hall"],
              ["Location", "Manipur Technical University"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className='font-mono text-sm text-blue-300'>{name}</dt>
                <dd className='mt-0.5 text-2xl font-semibold tracking-tight text-white'>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
