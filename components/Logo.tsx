"use client";

import { addSquare, logo } from "@/assets/icons";
import { useLocalStorage } from "@/hooks";
import { routes } from "@/utils/routes";
import Link from "next/link";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  const [isFirstLoad, setIsFirstLoad] = useLocalStorage("isFirstLoad", "y");

  const contentVariants = {
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
      transition: { delay: 0.2 },
    },
  };

  const version03 = [
    {
      id: 1,
      update:
        "We’ve added over 999 icons to MeisterIcons for all the categories available.",
    },
    {
      id: 2,
      update:
        "Added three new categories - clothing & fashion, music and gaming.",
    },
    {
      id: 3,
      update:
        "We’ve introduced bold icons for most of the existing linear icons.",
    },
    {
      id: 4,
      update:
        "We’ve also worked massively on code refactoring and optimization.",
    },
    { id: 5, update: "Some icons with typos in their names have been fixed." },
    {
      id: 6,
      update: "Updated the website and figma plugin with new functionalities.",
    },
    {
      id: 7,
      update: "We’ve also updated the “how to use” guide for all platforms.",
    },
  ];
  const version01 = [
    {
      id: 1,
      update:
        "MeisterIcons first release has been introduced with over 500 linear icons.",
    },
    {
      id: 2,
      update: "Published the MeisterIcons plugin for the figma community.",
    },
    { id: 3, update: "Added support for npm and React." },
    {
      id: 4,
      update:
        "Website has been updated with all the icons and basic search functionality. ",
    },
    { id: 5, update: "Made with ❤️ in Kathmandu, Nepal." },
  ];

  const handleChangelogClose = () => {
    if (isFirstLoad === "y") {
      setIsFirstLoad("n");
    }
  };

  return (
    <Link href={routes.landing} className="inline-flex items-center gap-2">
      <Image
        src={logo}
        alt={"mni-logo"}
        className="w-12 h-12"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <strong className="font-medium text-lg text-grey-800">
          MeisterIcons
        </strong>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="font-normal text-sm leading-[14px] text-grey-600 px-[0.5625rem] py-1 bg-grey-200 rounded-[1.625rem] w-fit">
              v 1.0.0
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
            <Dialog.Content
              asChild
              className="mx-auto z-10 relative top-[-11rem] shadow-lg rounded-[2.5rem] max-w-[62.5rem] w-full  min-h-[59.75rem] h-full overflow-y-scroll bg-white p-10"
            >
              <motion.div
                animate="visible"
                initial="hidden"
                variants={contentVariants}
              >
                <div className="flex justify-between items-center mb-6 ">
                  <Dialog.Title
                    className={`text-grey-900 text-[2rem] font-semibold leading-10 -tracking-[0.04rem]`}
                  >
                    Changelog
                  </Dialog.Title>

                  <Dialog.Close
                    onClick={handleChangelogClose}
                    className="text-2xl"
                  >
                    &#x2715;
                  </Dialog.Close>
                </div>

                <strong className=" text-xl leading-8 -tracking-[0.025rem font-medium text-grey-900">
                  Version 0.3 - 3rd Sep 2023
                </strong>

                <ul className="mt-3 flex flex-col gap-3 mb-6">
                  {version03.map(({ id, update }) => (
                    <li key={id} className="flex items-center gap-3">
                      <Image
                        src={addSquare}
                        alt="add-square"
                        width={24}
                        height={24}
                        className="w-6 h-6 text-grey-600"
                      />
                      {update}
                    </li>
                  ))}
                </ul>

                <strong className=" text-xl leading-8 -tracking-[0.025rem font-medium text-grey-900">
                  Version 0.1 - 31st Apr 2022
                </strong>

                <ul className="mt-3 flex flex-col gap-3">
                  {version01.map(({ id, update }) => (
                    <li key={id} className="flex items-center gap-3">
                      <Image
                        src={addSquare}
                        alt="add-square"
                        className="w-6 h-6 text-grey-600"
                      />
                      {update}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Link>
  );
}
