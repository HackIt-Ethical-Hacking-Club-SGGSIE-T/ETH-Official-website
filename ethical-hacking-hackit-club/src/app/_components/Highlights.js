'use client';
import { motion } from 'framer-motion';

import styles from '../style/index';
import { highlights } from '../constants/index';
import { staggerContainer } from '../utils/motion';
import { HighlightCard } from './srcs/HightlightCard';
import { TitleText, TypingText } from './srcs/custom-text';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Highlights " textStyles="text-center m-2 p-2" />
      <TitleText title={<>Some Highlights</>} textStyles="text-center m-2 p-2" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {highlights.map((item, index) => (
          <HighlightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>

  </section>
);

export default Insights;