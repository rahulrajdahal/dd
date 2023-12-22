import React from "react";
import { defaultAttributes } from "./defaultAttributes";
import { IconNode } from "./helpers";

type Tag = string[];

export type IconType = "all" | "linear" | "bold";

export type Icon = [name: string, icon: IconNode];
export const toKebabCase = (string: string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export const createMeistericon = (iconName: string, iconNode: IconNode[]) => {
  const Component = React.forwardRef(
    (
      {
        color = "currentColor",
        size = 32,
        ...rest
      }: { color?: string; size?: number | string },
      ref
    ) =>
      React.createElement(
        "svg",
        {
          key: iconName,
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          fill: color,
          className: `mni mni-${toKebabCase(iconName)}`,
          ...rest,
        },
        (iconNode as any)?.map(([tag, attrs]: [string, any], i: number) => {
          delete attrs["fill-rule"];
          delete attrs["clip-rule"];

          return React.createElement(tag, {
            key: i.toPrecision(),
            fillRule: "evenodd",
            clipRule: "evenodd",
            className: `${attrs.fill === "#fff" ? "" : "fill-[#1c2a3a]"}`,
            ...attrs,
          });
        })
      )
  );

  Component.displayName = `${iconName}`;

  return Component;
};
