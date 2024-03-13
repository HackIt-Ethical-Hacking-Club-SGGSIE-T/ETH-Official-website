'use client';

import { curve, heroBackground, robot } from '../_assets';
import Button from "./design/Button";
import Section from "./design/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./design/Generating";
import Notification from "./design/Notification";
import CompanyLogos from "./design/CompanyLogos";
import Image from 'next/image';

let hackerBg = '/imgs/hackerbg.jpg';
let hackerOnScreen = '/imgs/hackeronscreen.jpg';

const HeroSectionBackground = () => {
  const parallaxRef = useRef(null);
  return (
    <>
      <div className="h-screen bg-white">
        <div className="absolute top-[54%] left-1/2 w-full -translate-x-1/2 md:top-[46%] md:w-[100%] lg:top-0">
          {/* <Image
            // background
            src={hackerBg}
            className="w-[50%] mx-auto "
            width={100}
            height={100}
            alt="hero"
          /> */}
        </div>
      </div>

      <Section
        className="pt-[12rem] -mt-[2.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="mb-6 h1">
              Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
              <span className="relative inline-block">
                Brainwave{" "}
                <Image
                  src={curve}
                  className="absolute left-0 w-full top-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
              Unleash the power of AI within Brainwave. Upgrade your productivity
              with Brainwave, the open AI chat app.
            </p>
            <Button href="/pricing" white>
              Get started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <Image
                    src={hackerOnScreen}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <Image src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <Image
                // background
                src={heroBackground}
                className="w-[100%] mx-auto "
                width={100}
                height={100}
                alt="hero"
              />
            </div>

            <BackgroundCircles />
          </div>

          <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
        </div>

        <BottomLine />
      </Section>
    </>
  );
};

export default HeroSectionBackground