"use client";

import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { css, figma, github, npm, svg } from "@/assets/icons";
import Link from "next/link";
import Image from "next/image";
import { IconButton, Search } from "@/components";
import { createMeistericon } from "@/utils/createMeistericon";
import { IconNode, Tags } from "@/utils/helpers";
import { useIcons } from "@/hooks";
import Icons, { IIcons } from "./Icons";

const gradient = keyframes` 
 0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }`;

const IconCount = styled.span`
  background: linear-gradient(90.59deg, #3e64ff 0.51%, #84ffb5 99.49%) 0 0/400%
    100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: ${gradient} 4s ease-in-out infinite;
  background-size: 200% 200%;
`;
const bounce = keyframes`
0%,
100% {
  transform: translateY(-25%);
  animation-timing-function: ease-in-out;
}

50% {
  transform: none;
  animation-timing-function: ease-in-out;
}`;

const IconsAdded = styled(motion.span)`
  box-shadow: 0px 5px 25px rgba(13, 24, 41, 0.2);
  animation: ${bounce} 3s infinite;
`;
type IHome = {
  iconsNodes: IconNode[];
  tags: Tags;
  categories: Tags;
};
export default function Home({
  iconsNodes,
  tags,
  categories,
}: Readonly<IHome>) {
  const iconsAddedVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -600,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  const iconsVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -2000,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const icons = [
    {
      id: 1,
      title: "figma",
      icon: figma,
      to: "https://www.figma.com/community/plugin/1065974489689844727/MeisterIcons",
    },
    {
      id: 2,
      title: "svg",
      icon: svg,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
    {
      id: 3,
      title: "css",
      icon: css,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
    {
      id: 4,
      title: "npm",
      icon: npm,
      to: "https://www.npmjs.com/package/meistericons",
    },
    {
      id: 5,
      title: "github",
      icon: github,
      to: "https://github.com/rahulrajdahal/meistericons",
    },
  ];

  const mnicons = useIcons(iconsNodes, tags, categories);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[8.75rem]">
      <IconsAdded
        initial="hidden"
        animate="visible"
        variants={iconsAddedVariants}
        className="px-6 py-3 bg-white rounded-lg text-base leading-4 text-grey-800 font-medium"
      >
        🎁 +999 icons added
      </IconsAdded>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="font-normal text-[36px] h-full leading-[60px] text-center text-grey-800 mt-8 w-[80%]
      md:text-[3.75rem] md:leading-[4.5rem] md:w-[45%]"
      >
        Over <IconCount className="font-extrabold">1500+</IconCount> Open-Source
        Icons for your next BIG project
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconsVariants}
        className="flex items-center gap-10 mt-12 md:gap-[50px]"
      >
        {icons?.map(({ icon, id, to, title }) => (
          <motion.span
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            key={id}
            className="hover:cursor-pointer"
          >
            <Link href={to} target="_blank" rel="noreferrer">
              <Image
                width={32}
                height={32}
                src={icon}
                alt={title}
                className="min-w-[2.5rem] h-8"
              />
            </Link>
          </motion.span>
        ))}
      </motion.div>
      <Search />
      <Icons icons={mnicons} />
    </div>
  );
}
