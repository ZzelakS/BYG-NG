import { UsersRound } from "lucide-react";
import { Palette } from "lucide-react";
import { Gift } from "lucide-react";
import { Music } from "lucide-react";
import { PlugZap } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";

import user1 from "../assets/profile-pictures/user7.jpg";
import user2 from "../assets/profile-pictures/user7.jpg";
import user3 from "../assets/profile-pictures/user7.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import image1 from "../assets/team bonding.jpeg";
import image2 from "../assets/childrens.jpeg";
import image3 from "../assets/karaoke.jpeg";
import image4 from "../assets/sip.jpeg";
import image5 from "../assets/candle.jpeg";
import image6 from "../assets/meals.jpeg";
import gallery2 from "../assets/gallery2.jpg";

export const navItems = [
  // { label: "Workflow", href: "#" },
  { label: "Our Packages", href: "/packages" },
  { label: "Contact Us", href: "/contact" },
  { label: "Menu", href: "/food-menu" },
  // { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Seyi Tinubu",
    company: "Diplomat",
    image: user1,
    text: "I am extremely satisfied with the services provided. Their team was very responsive and professional.",
  },
  {
    user: "Linda Ikeji",
    company: "Linda Ikeji Blog",
    image: user2,
    text: "I can confidently say that they make the best pasta on the island!",
  },
  {
    user: "Alex Unusual",
    company: "Unusual Fest",
    image: user3,
    text: "I would highly recommend them to anyone looking for top-notch spot with great food.",
  },
  // {
  //   user: "Ronee Brown",
  //   company: "Fusion Dynamics",
  //   image: user4,
  //   text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  // },
  // {
  //   user: "Michael Wilson",
  //   company: "Visionary Creations",
  //   image: user5,
  //   text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  // },
  // {
  //   user: "Emily Davis",
  //   company: "Synergy Systems",
  //   image: user6,
  //   text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  // },
];

export const features = [
  {
    icon: <UsersRound />,
    text: "Team Bonding",
    image: image1,
    description:
      "The perfect mix for building connections and creating memories!",
  },
  {
    icon: <Gift />,
    text: "Children's Party",
    image: image2,
    description:
      "Make your child’s special day unforgettable at BYG! 🎉🎤.",
  },
  {
    icon: <Music />,
    text: "Karaoke",
    image: image3,
    description:
      "Whether you’re a pro or just here for fun, our karaoke nights are all about good vibes, and unforgettable performances!",
  },
  {
    icon: <Palette />,
    text: "Sip and Paint",
    image: image4,
    description:
      "Enjoy a night of artistic expression paired with delightful cocktails and good vibes. No experience needed—just bring your imagination!.",
  },
  {
    icon: <PlugZap />,
    text: "Candle Making",
    image: image5,
    description:
      "Blend scents, design your masterpiece, and light up your creativity!.",
  },
  {
    icon: <UtensilsCrossed />,
    text: "The tastiest meals",
    image: image6,
    description:
      "From sizzling grills to gourmet delights, our sumptuous meals are crafted to satisfy your cravings and elevate your dining experience. Bon appétit!",
  },
];

export const checklistItems = [
  {
    title: "Sizzling Grills",
    description:
      "Experience the smoky perfection of our sizzling grills, every bite is pure flavor fire! 🍖🔥",
  },
  {
    title: "Sparkling Cocktails",
    description:
      "Raise your glass to our handcrafted cocktails—bold, bubbly, and unforgettable! 🍸✨",
  },
  {
    title: "Delicious Milkshakes",
    description:
      "Treat yourself to our creamy, dreamy milkshakes—pure indulgence in every sip! 🥤🍫",
  },
  {
    title: "Perfect Ambience",
    description:
      "Step into the perfect ambience—where every moment feels just right. ✨",
  },
];

export const pricingOptions = [
  {
    title: "Team Bondings",
    price: "₦40k",
    image: image1,
    features: [
      "Engaging and Interactive Games",
      "Sumptuous Meals",
      "Fun Karaoke Sessions",
      "Infectious Vibes",
    ],
  },
  {
    title: "Kids' Parties",
    price: "₦50k",
    image: image2,
    features: [
      "Custom Themed Birthday Party",
      "Finger Foods",
      "Cake and Decorations",
      "MC and DJ",
    ],
  },
  {
    title: "Photo & Video Shoots",
    price: "TBD",
    image: gallery2,
    features: [
      "Cozy Spaces",
      "Steady Power",
      "Proper Lighting and Aesthetics",
    ],
  },
];

// export const resourcesLinks = [
//   { href: "#", text: "Getting Started" },
//   { href: "#", text: "Documentation" },
//   { href: "#", text: "Tutorials" },
//   { href: "#", text: "API Reference" },
//   { href: "#", text: "Community Forums" },
// ];

// export const platformLinks = [
//   { href: "#", text: "Features" },
//   { href: "#", text: "Supported Devices" },
//   { href: "#", text: "System Requirements" },
//   { href: "#", text: "Downloads" },
//   { href: "#", text: "Release Notes" },
// ];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];
