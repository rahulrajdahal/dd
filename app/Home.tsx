"use client";

import React from "react";
import { Search } from "@/components";
import { IconNode, Tags } from "@/utils/helpers";
import { useIcons } from "@/hooks";
import Icons from "./Icons";
import IconsLoading from "@/components/loading/IconsLoading";
import Header from "./Header";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

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
  const [limit, setLimit] = React.useState(30);
  const [loading, setLoading] = React.useState(false);
  const iconsRef = React.useRef<HTMLSpanElement | null>(null);
  const onScreen = useIntersectionObserver(iconsRef, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  const mnicons = useIcons(iconsNodes, tags, categories, limit);

  React.useEffect(() => {
    if (onScreen && limit <= 1592) {
      setLoading(true);
      setLimit(1592);
      setLoading(false);
      window.scroll({ top: iconsRef.current?.offsetTop });
    }
  }, [limit, onScreen]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[8.75rem]">
      <Header />
      <Search />
      <React.Suspense fallback={<IconsLoading />}>
        <Icons icons={mnicons} />
        {loading ? <IconsLoading /> : null}
        <span className="w-full h-40" ref={iconsRef} />
      </React.Suspense>
    </div>
  );
}
