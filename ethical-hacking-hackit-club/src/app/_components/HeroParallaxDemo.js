"use client";
import React from "react";
import { HeroParallax } from "./srcs/hero-parallax";
import coursera from '../_assets/parallax/coursera.png';
import cybrary from '../_assets/parallax/cybrary.png';
import edureka from '../_assets/parallax/edureka.png';
import hackthebox from '../_assets/parallax/hackthebox.png';
import offsec from '../_assets/parallax/offsec.png';
import tryhackme from '../_assets/parallax/tryhackme.png';


export default function HeroParallaxDemo() {
  return React.createElement(HeroParallax, { products: products });
}
export const products = [
  {
    title: "Cybrary",
    link: "https://www.cybrary.it/course/ethical-hacking",
    thumbnail: cybrary
  },
  {
    title: "HackTheBox",
    link: "https://www.hackthebox.com/hacker",
    thumbnail:hackthebox
  },
  {
    title: "TryHackMe",
    link: "https://tryhackme.com/",
    thumbnail: tryhackme
  },

  {
    title: "OffSec",
    link: "https://www.offsec.com/metasploit-unleashed/",
    thumbnail: offsec
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Coursera",
    link: "https://www.coursera.org/learn/ethical-hacking-essentials-ehe",
    thumbnail: coursera
  },
  {
    title: "Edureka",
    link: "https://www.edureka.co/cybersecurity-certification-training",
    thumbnail: edureka
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
