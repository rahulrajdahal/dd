"use client";

import { Search } from "@/components";
import IconsLoading from "@/components/loading/IconsLoading";
import React from "react";
import Header from "./Header";
import Icons from "./Icons";

type IHome = {
  iconsNodes: [string, unknown][];
};
export default function Home({ iconsNodes }: Readonly<IHome>) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[8.75rem]">
      <Header />
      <Search />
      <React.Suspense fallback={<IconsLoading />}>
        <Icons icons={iconsNodes} />
      </React.Suspense>
    </div>
  );
}
