'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import Link from 'next/link';
// import Arrow from '../../_assets/svg/Arrow';

export const HighlightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <Link href={'#'} target='_blank'>
    <img
      src={imgUrl}
      alt="title"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover scale-90 hover:scale-100 focus:scale-90 transition-transform duration-300 ease-in-out"
      />
      </Link>
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[28px] text-[22px] text-white hover:cursor-pointer hover:text-green-600 scale-90 hover:scale-100 focus:scale-90 transition-transform duration-300 ease-in-out ">
          {title}
        </h4>
        <p className="mt-[16px] font-normal leading-tight lg:text-[16px] text-[14px] text-secondary-white ">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px]  hover:cursor-pointer rounded-full bg-transparent border-[1px] border-white scale-75 hover:scale-90 focus:scale-90 transition-transform duration-300 ease-in-out shadow-white"
      >
        <img
          src="/imgs/uprise.png"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain "
        />
      </div>
    </div>
  </motion.div>
);

// export default HighlightCard;

