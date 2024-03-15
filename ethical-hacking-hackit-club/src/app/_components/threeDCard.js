"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from './srcs/3d-card';

export function ThreeDCardDemo({title, imageURL, description}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="border rounded-lg  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[25rem] h-auto  p-6"
     >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-2 text-sm text-grey-600"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/imgs/icon.png"
            height="1000"
            width="1000"
            className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-between mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
