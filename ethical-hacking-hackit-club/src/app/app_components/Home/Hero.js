import React from 'react'
import dynamic from 'next/dynamic';
// import EvervaultCardDemo from '../../_components/EvervaultCardDemo';
import AboutWork from '../../_components/AboutWork';
import AboutClub from '../../_components/AboutClub';
import Footer from '../../_components/Footer';

// const EvervaultCardDemo = dynamic(() => import('@/app/_components/EvervaultCardDemo'), { ssr: false })

const Navbar = dynamic(() => import('@/app/_components/Navbar'), { ssr: false })
const HeroParallaxDemo = dynamic(() => import('@/app/_components/HeroParallaxDemo'), { ssr: false })
const HeroSectionBackground = dynamic(() => import('../../_components/HeroSectionBackground'), { ssr: false })
const Highlights = dynamic(() => import('../../_components/Highlights'), { ssr: false })
// const EvervaultCardDemo = dynamic(() => import('@/app/_components/EvervaultCardDemo'), { ssr: false })
// const RunningCodes = dynamic(() => import('@/app/_components/RunningCodes'), { ssr: false })
const ButtonGradient = dynamic(() => import('../../_assets/svg/ButtonGradient'), { ssr: false })
/*

Hero section structure=>

Navbar
Hero Section background
Hero Parallex Body
Cards Showing Highlights
*/

const Hero = () => {
  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Navbar />

      <div className='absolute left-0 z-10 border-2 border-white'>
      {/* <RunningCodes/> */}
      {/* <EvervaultCardDemo /> */}
      </div>
      <div className='absolute left-0 z-10 '>
      {/* <EvervaultCardDemo /> */}
      </div>

      <HeroSectionBackground />
      <HeroParallaxDemo />
      <Highlights />
      <AboutWork />
      <AboutClub />
      <Footer />
    </div>
      <ButtonGradient />
    </>
  )
}

export default Hero