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
        <div className='max-w-xl mx-auto space-y-6 text-center'>
          <p className='text-blue-300'>
            This conclave woudn&apos;t have been possible without the support
            from our beloved sponsors who have given us huge support and
            blessings
          </p>
          <h1 className='text-5xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-yellow-500 to-slate-200 bg-clip-text'>
            Our current sponsorships for the conclave
          </h1>
        </div>
        <div className='px-6 py-4 mt-6'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {sponsors.map((sponsor, index) => (
              <div
                key={"Sponsor-Image-" + sponsor.name + index}
                className='relative flex items-center justify-center object-contain p-3 overflow-hidden bg-white rounded-2xl'
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={100}
                  height={100}
                  className='w-auto h-24'
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
