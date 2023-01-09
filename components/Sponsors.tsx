import Image from "next/image";

import { Container } from "@components/Container";
import { SponsorLogo, sponsors } from "@utils/sponsorsData";

export function Sponsors() {
  return (
    <section
      id='sponsors'
      aria-labelledby='sponsors-title'
      className='py-20 sm:py-32'
    >
      <h2 id='sponsors-title' className='sr-only'>
        Sponsors
      </h2>
      <Container>
        <div className='max-w-3xl mx-auto space-y-6 text-left md:text-center'>
          <h1 className='text-5xl font-bold text-left text-transparent md:text-center bg-gradient-to-r from-pink-600 via-yellow-500 to-slate-200 bg-clip-text'>
            Our current sponsorships for the conclave
          </h1>
          <p className='text-blue-300'>
            This conclave woudn&apos;t have been possible without the support
            from our beloved sponsors who have given us huge support and
            blessings
          </p>
        </div>
        <div className='px-0 py-4 mt-6'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {sponsors.map((sponsor, index) => (
              <div
                key={"Sponsor-Image-" + sponsor.name + index}
                className='relative flex items-center justify-center object-cover w-full px-2 py-5 overflow-hidden bg-white border h-28 rounded-2xl border-slate-600/50'
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={100}
                  height={100}
                  className='object-contain w-auto h-24'
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
