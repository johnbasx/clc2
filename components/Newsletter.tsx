import Image from "next/image";

import { Button, ButtonLink } from "@components/ButtonLink";
import { Container } from "@components/Container";
import backgroundImage from "@images/background-newsletter.jpg";
import clc2Image from "@images/CLC2-words.png";
// import clc2Image from "@images/CLC2-blur-01.png";

export function Newsletter() {
  return (
    <section
      id='newsletter'
      aria-labelledby='newsletter-title'
      className='px-3'
    >
      <h2 id='newsletter-title' className='sr-only'>
        Newsletter
      </h2>
      <Container>
        <div className='relative px-4 py-20 -mx-4 overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 sm:-mx-6 sm:px-6 md:mx-0 rounded-[2.5rem] md:rounded-[5rem] md:px-16 xl:px-24 xl:py-36 backdrop-blur-2xl bg-opacity-50'>
          <div className='relative grid items-center max-w-2xl grid-cols-1 px-6 mx-auto gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2'>
            <div>
              <p className='text-4xl font-bold text-red-200 font-display sm:text-5xl'>
                Hope to see you there!
              </p>
              <p className='mt-4 text-lg tracking-tight text-slate-400'>
                Come and join us at the conclave. It would be nice and a great
                joy for us to see you at the event.
              </p>
            </div>
            <div className='flex justify-end'>
              <div>
                <ButtonLink href='https://forms.gle/bMvNmF7mLEbaG7q98'>
                  Join us now
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
