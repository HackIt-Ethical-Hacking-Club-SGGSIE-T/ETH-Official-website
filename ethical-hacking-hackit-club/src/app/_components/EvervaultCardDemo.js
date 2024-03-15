import React from 'react';
// import dynamic from 'next/dynamic';
import {EvervaultCard,Icon} from './srcs/hover-card';

// const EvervaultCard = dynamic(() => import('./srcs/hover-card').then((mod) => mod.EvervaultCard), {
//   ssr: false // Make sure to disable SSR for components using hooks
// });


export default function EvervaultCardDemo() {
  return (
    <div className="flex flex-col items-start sm:w-full md:w-full lg:w-[50rem] mx-auto p-4 relative h-[30rem]">
      {/* <Icon className="absolute w-6 h-6 text-black -top-3 -left-3 dark:text-white" />
      <Icon className="absolute w-6 h-6 text-black -bottom-3 -left-3 dark:text-white" />
      <Icon className="absolute w-6 h-6 text-black -top-3 -right-3 dark:text-white" />
      <Icon className="absolute w-6 h-6 text-black -bottom-3 -right-3 dark:text-white" /> */}

      <EvervaultCard text="hello" />

      <h2 className="mt-4 text-sm font-light text-black dark:text-white">
        {/* Hover over this card to reveal an awesome effect. Running out of copy here. */}
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {/* Watch me hover */}
      </p>
    </div>
  );
}
