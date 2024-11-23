import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Home", "Collections", "About Gucci", "Shop"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "GUCCI OUD",
      "Experience timeless luxury.",
    ],
    video: highlightFirstVideo,
    videoDuration: 2,
  },
  {
    id: 2,
    textLists: [],
    video: highlightSecondVideo,
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: [
      "Dance with elegance",
      "live with Gucci.",
    ],
    video: highlightThirdVideo,
    videoDuration: 10,
  },
  {
    id: 4,
    textLists: [
      "GUCCI BAMBOO :",
      "confidence & love",
    ],    video: highlightFourthVideo,
    videoDuration: 11,
  },
];



export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];