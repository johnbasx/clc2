import { days } from "@utils/speakersData";
import React from "react";
import { clsx } from "clsx";
import { Tab } from "@headlessui/react";

const SpeakerBlock = ({ selectedIndex }: { selectedIndex: number }) => {
  return (
    <div>
      {days.map((day, dayIndex) => (
        <div
          key={day.dateTime + day.name + dayIndex}
          className='relative lg:pl-8'
        >
          <svg
            aria-hidden='true'
            className={clsx(
              "absolute top-[0.5625rem] -left-[0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
              {
                "fill-emerald-400 stroke-emerald-400":
                  dayIndex === selectedIndex,
                "fill-transparent stroke-slate-400": dayIndex !== selectedIndex,
              }
            )}
          >
            <path
              d='M3 0L6 3L3 6L0 3Z'
              strokeWidth={2}
              strokeLinejoin='round'
            />
          </svg>
          <div className='relative'>
            <div
              className={clsx("font-mono text-sm mt-5", {
                "text-emerald-300": dayIndex === selectedIndex,
                "text-slate-400": dayIndex !== selectedIndex,
              })}
            >
              <Tab className='[&:not(:focus-visible)]:focus:outline-none'>
                <span className='absolute inset-0' />
                {day.name}
              </Tab>
            </div>
            <time
              dateTime={day.dateTime}
              className={clsx(
                "mt-3 block text-2xl font-semibold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-150",
                {
                  "to-slate-200 from-teal-700": dayIndex === selectedIndex,
                  "from-slate-500 to-slate-700": dayIndex !== selectedIndex,
                }
              )}
            >
              {day.date}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakerBlock;
