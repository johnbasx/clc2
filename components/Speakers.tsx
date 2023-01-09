import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Container } from "@components/Container";
import { days } from "@utils/speakersData";
import SpeakerBlock from "./SpeakerBlock";

export function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id='speakers'
      aria-labelledby='speakers-title'
      className='py-20 sm:py-32'
    >
      <svg aria-hidden='true' width={0} height={0}>
        <defs>
          <clipPath id={`${id}-0`} clipPathUnits='objectBoundingBox'>
            <path d='M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0' />
          </clipPath>
          <clipPath id={`${id}-1`} clipPathUnits='objectBoundingBox'>
            <path d='M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7' />
          </clipPath>
          <clipPath id={`${id}-2`} clipPathUnits='objectBoundingBox'>
            <path d='M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0' />
          </clipPath>
        </defs>
      </svg>
      <Container>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2
            id='speakers-title'
            className='text-4xl font-semibold text-slate-300 tracking font-display sm:text-5xl'
          >
            Speakers
          </h2>
          <p className='mt-4 text-lg text-slate-400 font-display'>
            Learn from the experts on the cutting-edge of deception at the most
            sinister companies.
          </p>
        </div>
        <Tab.Group
          as='div'
          className='grid items-start grid-cols-1 mt-14 gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4'
          vertical={tabOrientation === "vertical"}
        >
          <div className='relative flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:block sm:overflow-visible sm:pb-0'>
            <div className='absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block' />
            <Tab.List className='grid justify-start grid-flow-col px-4 auto-cols-auto gap-x-8 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:block lg:space-y-10 lg:text-left'>
              {({ selectedIndex }) => (
                <SpeakerBlock selectedIndex={selectedIndex} />
              )}
            </Tab.List>
          </div>
          <Tab.Panels className='lg:col-span-3'>
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none'
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className='relative overflow-hidden transform aspect-square group rounded-3xl'>
                      {/* <div
                        className={clsx(
                          "absolute top-0 left-0 right-4 bottom-6 rounded-4xl border-4 transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-blue-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][speakerIndex % 3]
                        )}
                      /> */}
                      <div
                        className='absolute inset-0 overflow-hidden bg-transparent bg-white rounded-3xl'
                        // style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className='object-cover w-full h-full transition duration-300 group-hover:scale-110'
                          src={speaker.image}
                          height={1000}
                          width={1000}
                          alt={"CLC2-speaker-" + speaker.name}
                        />
                      </div>
                    </div>
                    <h3 className='mt-8 text-2xl font-bold text-white font-display'>
                      {speaker.name}
                    </h3>
                    <p className='mt-1 text-base text-slate-400'>
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
}
