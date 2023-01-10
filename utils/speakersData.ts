import anilImage from "@images/speakers/anil-synapx.jpg";
import dhabaliImage from "@images/speakers/dhabali-babina.png";
import drpalinImage from "@images/speakers/drpalin-shija.png";
import irabantaImage from "@images/speakers/irabanta-unacco.png";
import niranjanImage from "@images/speakers/niranjan-jcre.png";
import ranjitaImage from "@images/speakers/ranjita-her.jpg";
import { StaticImageData } from "next/image";

export type SpeakerProps = {
  name: string;
  role: string;
  image: StaticImageData;
};

export type SessionProps = {
  name: string;
  date: string;
  dateTime: string;
  speakers: SpeakerProps[];
};

export const days: SessionProps[] = [
  {
    name: "Session #1",
    date: "11:30 AM - 1:00 PM",
    dateTime: "2023-01-13",
    speakers: [
      {
        name: "Dr. Thangjam Dhabali Singh",
        role: "Chairman & MD, BABINA Group of Companies",
        image: dhabaliImage,
      },
      {
        name: "Dr. Palin Khundongbam",
        role: "Chairman & MD, Shija Hospital and Research Institute",
        image: drpalinImage,
      },
      {
        name: "Ningombam Irabanta Singh",
        role: "Chairman, UNACCO School",
        image: irabantaImage,
      },
    ],
  },
  {
    name: "Session #2",
    date: "1:40 AM - 2:50 PM",
    dateTime: "2023-01-13",
    speakers: [
      {
        name: "L. Niranjan Singh",
        role: "Director & CEo, JCRE Skill Solutions",
        image: niranjanImage,
      },
      {
        name: "Khangembam Ranjita Devi",
        role: "Director, HER Soft Skills Training Institute",
        image: ranjitaImage,
      },
      {
        name: "Haorokcham Anil",
        role: "Founder & MD, Synapx",
        image: anilImage,
      },
    ],
  },
];
