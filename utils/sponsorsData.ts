import babinaLogo from "@images/sponsors/BABINA.jpg";
import shijaLogo from "@images/sponsors/shija.png";
import jcreLogo from "@images/sponsors/bg-removed/jcre.png";
import herLogo from "@images/sponsors/her.png";
import airportLogo from "@images/sponsors/bg-removed/airport-authority.png";
import khumanDairyLogo from "@images/sponsors/bg-removed/KHUMAN-DAIRY.png";
import marjingCommerceLogo from "@images/sponsors/bg-removed/marjing-commerce.png";
import sairemLogo from "@images/sponsors/bg-removed/sairem.png";
import sydmouthLogo from "@images/sponsors/bg-removed/sydmouthdesign.png";
import thangjingLaundryLogo from "@images/sponsors/bg-removed/thangjing-laundry.png";
import beautyRoomLogo from "@images/sponsors/bg-removed/the-beauty-room.png";
import hotelYaiphabaLogo from "@images/sponsors/hotelyaiphaba.png";
import unaccoLogo from "@images/sponsors/UNACCO.jpg";

import khilLogo from "@images/sponsors/khil.png";
import krishiLogo from "@images/sponsors/krishi-vigyan.jpeg";
import kwamsLogo from "@images/sponsors/kwams.jpeg";
import liklaLogo from "@images/sponsors/likla.jpeg";
import mahindraLogo from "@images/sponsors/mahindra.jpeg";
import seoulHouseLogo from "@images/sponsors/seoul-house.jpeg";
import tmbLogo from "@images/sponsors/TMB.jpeg";
import uniquePlanLogo from "@images/sponsors/unique-planners.jpeg";
import jivanHospitalLogo from "@images/sponsors/jivan-hospital.png";
import okHotelLogo from "@images/sponsors/ok-hotel.jpeg";
import synapxLogo from "@images/sponsors/synapx.jpg";
import mtuLogo from "@images/sponsors/mtu.png";
import tataTisconLogo from "@images/sponsors/tata-tiscon.png";

import mphcLogo from "@images/sponsors/mphc.jpg";
import balajiLogo from "@images/sponsors/balaji-flour-mill.png";
import dcLogo from "@images/sponsors/dc-imphal-west.png";
import freeSoldierLogo from "@images/sponsors/free-soldier.jpg";
import mdAllumLogo from "@images/sponsors/md-sala-allu.jpg";
import msmeLogo from "@images/sponsors/msme.jpg";

import bbrossLogo from "@images/sponsors/no-logo/bbross.png";
import cbLogo from "@images/sponsors/no-logo/cb.png";
import firstTectLogo from "@images/sponsors/no-logo/first-tect.png";
import fryGuysLogo from "@images/sponsors/no-logo/fry-guys.png";
import godspeedLogo from "@images/sponsors/no-logo/godspeed-physio.png";
import hvsLogo from "@images/sponsors/no-logo/hvs.png";
import lrSinghLogo from "@images/sponsors/no-logo/lr-singh.png";
import ushamDevenLogo from "@images/sponsors/no-logo/usham-deven.png";
import wangbrelLogo from "@images/sponsors/no-logo/wangbrel-decor.png";
import worshangLogo from "@images/sponsors/no-logo/worshang-hungyo.png";

const sponsorCategory = {
  platinum: { name: "platinum", max: 50000, min: 25000 },
  diamond: { name: "diamond", min: 15000, max: 25000 },
  gold: { name: "gold", min: 10000, max: 15000 },
  silver: { name: "silver", min: 5000, max: 8000 },
  bronze: { name: "bronze", min: 2000, max: 5000 },
};

export const sponsors = [
  {
    id: 1,
    name: "Babina",
    logo: babinaLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 4,
    name: "Unacco",
    logo: unaccoLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 3,
    name: "JCRE",
    logo: jcreLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 24,
    name: "SYNAPX",
    logo: synapxLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 2,
    name: "Shija",
    logo: shijaLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 12,
    name: "HER",
    logo: herLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 71,
    name: "Manipur Technical University",
    logo: mtuLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 22,
    name: "Jivan Hospital",
    logo: jivanHospitalLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 5,
    name: "Aiport Authority",
    logo: airportLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 14,
    name: "Khil Design",
    logo: khilLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 6,
    name: "Khuman Dairy",
    logo: khumanDairyLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 7,
    name: "Marjing Commerce",
    logo: marjingCommerceLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 72,
    name: "Tata Tiscon",
    logo: tataTisconLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 73,
    name: "DC Imphal West",
    logo: dcLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 74,
    name: "Manipur Police Housing Corp",
    logo: mphcLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 106,
    name: "HVS Pvt Ltd",
    logo: hvsLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 8,
    name: "Sairem",
    logo: sairemLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 9,
    name: "Sydmouth Designs",
    logo: sydmouthLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 23,
    name: "OK Hotel",
    logo: okHotelLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 10,
    name: "Thangjing Laundry",
    logo: thangjingLaundryLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 11,
    name: "The Beauty Room",
    logo: beautyRoomLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 13,
    name: "Hotel Yaiphaba",
    logo: hotelYaiphabaLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 15,
    name: "Krishi Vigyan Kendra",
    logo: krishiLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 16,
    name: "Kwams",
    logo: kwamsLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 17,
    name: "Likla",
    logo: liklaLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 104,
    name: "Fry Guys",
    logo: fryGuysLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 18,
    name: "Mahindra",
    logo: mahindraLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 19,
    name: "Seoul House",
    logo: seoulHouseLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 105,
    name: "Godspeed Physiotherapy",
    logo: godspeedLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 40,
    name: "MSME Manipur",
    logo: msmeLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 20,
    name: "The Moving Billboard",
    logo: tmbLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 110,
    name: "Worshang Hungyo",
    logo: worshangLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 21,
    name: "Unique Planners",
    logo: uniquePlanLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 33,
    name: "Shri Balahi Flour Mill",
    logo: balajiLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 34,
    name: "Free Soldier",
    logo: freeSoldierLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 35,
    name: "MD Salahuddin Aluminium",
    logo: mdAllumLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 101,
    name: "B Bross Spare Parts",
    logo: bbrossLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 102,
    name: "CB Enterprises",
    logo: cbLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 103,
    name: "First Tect",
    logo: firstTectLogo,
    category: sponsorCategory.gold,
  },

  {
    id: 107,
    name: "LR Singh Enterprises",
    logo: lrSinghLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 108,
    name: "Usham Deven (MLA)",
    logo: ushamDevenLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 109,
    name: "Wangbrel Decor",
    logo: wangbrelLogo,
    category: sponsorCategory.gold,
  },
];

export const SponsorLogo = { babinaLogo, shijaLogo, jcreLogo, herLogo };
