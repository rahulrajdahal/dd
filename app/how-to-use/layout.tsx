"use client";

import React from "react";
import { IRootLayout } from "../layout";
import { routes } from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import { figma } from "@/assets/icons";
import { usePathname } from "next/navigation";

export type IHowToUseLayout = IRootLayout;

const menus = [
  {
    id: 1,
    title: "FOR DESIGNERS",
    links: [{ id: 1, link: "Figma", to: `${routes.howToUse}/${routes.figma}` }],
  },
  {
    id: 2,
    title: "FOR DEVELOPERS",
    links: [
      { id: 1, link: "npm", to: `/${routes.howToUse}/${routes.npm}` },
      { id: 2, link: "React", to: `/${routes.howToUse}/${routes.react}` },
      { id: 2, link: "Vue", to: `/${routes.howToUse}/${routes.vue}` },
      { id: 2, link: "Vue 3", to: `/${routes.howToUse}/${routes.vue3}` },
    ],
  },
];

export default function HowToUseLayout({
  children,
}: Readonly<IHowToUseLayout>) {
  const pathname = usePathname();

  const activeMenu = React.useMemo(() => {
    return pathname.split("/").at(-1);
  }, [pathname]);

  return (
    <div className="px-[12.24%] flex justify-between gap-[0.8%] py-40 w-full">
      <aside className="w-full flex-[0.2]">
        <strong className="text-grey-700 text-[2rem] leading-[3rem] -tracking-[0.04rem] font-bold">
          How to Use
        </strong>
        <div className="mt-8 flex flex-col gap-10">
          {menus.map(({ id, links, title }) => (
            <div key={id}>
              <strong className="text-grey-700 text-base font-semibold tracking-[0.12rem]">
                {title}
              </strong>

              <ul className="flex flex-col gap-3 mt-3">
                {links.map(({ id, link, to }) => (
                  <li key={id}>
                    <Link
                      href={to}
                      className={`w-full ${
                        activeMenu === link.toLowerCase()
                          ? "text-grey- "
                          : "text-grey-700"
                      } text-lg font-medium -tracking-[0.0225rem]`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      <main className="w-full flex-[0.6]">{children}</main>

      <span className="rounded-3xl w-fit h-fit border px-10 py-[1.87rem] border-grey-300 bg-white">
        <Image
          src={figma}
          alt="mni-figma"
          width={60}
          height={60}
          className="w-[2.5005rem] h-[3.75rem] "
        />
      </span>
    </div>
  );
}
