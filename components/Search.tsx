"use client";

import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import Image from "next/image";
import { downArrow, search } from "@/assets/icons";
import { DebouncedInput } from ".";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as Select from "@radix-ui/react-select";
import { motion } from "framer-motion";
import { event } from "@/utils/gtag";

const searchVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.6,
    },
  },
};
const categories = [
  { id: 1, category: "All Icons" },
  { id: 2, category: "Arrows" },
  { id: 3, category: "Business" },
  { id: 4, category: "Charts" },
  { id: 5, category: "Children" },
  { id: 6, category: "Code" },
  { id: 7, category: "Communication" },
  { id: 8, category: "Date&Time" },
  { id: 9, category: "Design" },
  { id: 10, category: "Ecommerce" },
  { id: 11, category: "Education" },
  { id: 12, category: "Email" },
  { id: 13, category: "Files&Folders" },
  { id: 14, category: "Food&Drinks" },
  { id: 15, category: "Images" },
  { id: 16, category: "Layouts" },
  { id: 17, category: "Maps&Navigation" },
  { id: 18, category: "Media Controls" },
  { id: 19, category: "Medical" },
  { id: 20, category: "Menu" },
  { id: 21, category: "Nature" },
  { id: 22, category: "Security" },
  { id: 23, category: "Sports" },
  { id: 24, category: "Technology" },
  { id: 25, category: "Text" },
  { id: 26, category: "Transportation" },
  { id: 27, category: "Ui essentials" },
  { id: 28, category: "User actions" },
  { id: 29, category: "Users" },
  { id: 30, category: "Weather" },
];
export default function Search() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={searchVariants}
      className={`w-full border z-10 sticky top-0 flex items-center justify-between border-grey-300 rounded-lg bg-white 
     mt-[101px] md:h-[60px]
     md:px-[12.5%]`}
    >
      <div className="flex flex-col md:flex-row items-center w-full border-x border-x-grey-300 h-full px-[21px]">
        <span className="inline-flex items-center gap-2 w-full sm:border-none border-b border-b-grey-300">
          <Image
            src={search}
            alt="search"
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />

          <DebouncedInput
            value={searchParams.get("q") ?? ""}
            onChange={(value) => {
              const params = new URLSearchParams(searchParams);
              const category = searchParams.get("category");

              if (value) {
                if (category) {
                  params.delete("category");
                }
                params.set("q", value as string);
                event({
                  action: "icons searched",
                  category: "Search",
                  label: "Search icons",
                  value: value as string,
                });
              } else {
                params.delete("q");
              }

              router.push(`${pathname}?${params}`);
            }}
            className=" w-full h-full outline-none"
          />
        </span>
        <ToggleGroup.Root
          type="single"
          defaultValue="all"
          aria-label="Icon Type"
          className="flex flex-row gap-3"
        >
          <ToggleGroup.Item
            className={`${
              !searchParams.get("type")
                ? "bg-grey-800 px-3 py-2 rounded-xl text-grey-50"
                : "text-grey-600"
            }  text-base font-medium `}
            value="all"
            aria-label="All"
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              event({
                action: "icons type clicked",
                category: "icons type",
                label: "Icon type all",
                value: "all",
              });
              params.delete("type");
              router.push(`${pathname}?${params}`);
            }}
          >
            All
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={`${
              searchParams.get("type") === "linear"
                ? "bg-grey-800 px-3 py-2 rounded-xl text-grey-50"
                : "text-grey-600"
            }  text-base font-medium `}
            value="linear"
            aria-label="Linear"
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("type", "linear");
              event({
                action: "icons type clicked",
                category: "icons type",
                label: "Icon type linear",
                value: "linear",
              });
              router.push(`${pathname}?${params}`);
            }}
          >
            Linear
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={`${
              searchParams.get("type") === "bold"
                ? "bg-grey-800 px-3 py-2 rounded-xl text-grey-50"
                : "text-grey-600"
            }  text-base font-medium `}
            value="bold"
            aria-label="Bold aligned"
            onClick={() => {
              const params = new URLSearchParams(searchParams);

              event({
                action: "icons type clicked",
                category: "icons type",
                label: "Icon type bold",
                value: "bold",
              });
              params.set("type", "bold");
              router.push(`${pathname}?${params}`);
            }}
          >
            Bold
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>

      <Select.Root
        value={
          searchParams.get("category")?.replaceAll("-", " ") ?? "All Icons"
        }
        onValueChange={(value) => {
          const params = new URLSearchParams(searchParams);
          const query = params.get("q");
          const category = value.toLowerCase().replaceAll(" ", "-");
          if (category === "all-icons") {
            params.delete("category");
          } else if (category.includes("&")) {
            params.set("category", category.replaceAll("&", "-and-"));
            router.push(`${pathname}?${params}`);
          } else {
            params.set("category", category);
            if (query) {
              params.delete("q");
            }

            event({
              action: `${value} Category clicked`,
              category: "Category",
              label: `${value} category`,
              value,
            });
            router.push(`${pathname}?${params}`);
          }
        }}
        defaultValue={"All Icons"}
      >
        <Select.Trigger
          asChild
          className="w-fit self-end border-r border-r-grey-300 py-4 px-[21px]"
        >
          <span className="capitalize w-full max-w-fit inline-flex  items-center gap-2">
            <Select.Value
              placeholder={
                searchParams.get("category")?.includes("-and-")
                  ? searchParams
                      .get("category")
                      ?.replaceAll(" ", "-")
                      .replaceAll("-and-", "&")
                  : searchParams.get("category")?.replaceAll("-", " ") ??
                    "All Icons"
              }
              className="capitalize"
            >
              {searchParams.get("category")?.includes("-and-")
                ? searchParams
                    .get("category")
                    ?.replaceAll(" ", "-")
                    .replaceAll("-and-", "&")
                : searchParams.get("category")?.replaceAll("-", " ") ??
                  "All Icons"}
            </Select.Value>
            <Select.Icon>
              <Image
                src={downArrow}
                alt="down-arrow"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            </Select.Icon>
          </span>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            className="min-w-[220px] w-full bg-white rounded-md  will-change-[opacity,transform]  max-h-[396px] overflow-y-scroll data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <Select.Viewport className="group w-full bg-grey-900 rounded-xl py-6 text-[13px] leading-none text-violet11 min-w-[260px] flex items-center h-[25px] flex-col select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              {categories.map(({ category, id }) => (
                <Select.Item
                  value={category}
                  className={`w-full font-medium text-lg   relative cursor-default select-none mb-3
            ${
              searchParams.get("category") === category
                ? "bg-grey-50 text-grey-900 hover:cursor-pointer"
                : "text-grey-50"
            } hover:bg-grey-50 hover:text-grey-900 px-6
            `}
                  key={id}
                >
                  {category}
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </motion.div>
  );
}
