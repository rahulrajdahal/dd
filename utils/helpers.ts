import React from "react";

export type IconNode = {
  [key: string]: [
    string,
    { fill: string; d: string; "fill-rule"?: string; "clip-rule"?: string }
  ][];
};

export type Icons = [string, IconNode[]][];

export type Icon = [name: string, icon: IconNode];

export type Tag = string[];
export type Tags = {
  [key: string]: Tag;
};

export const filterTags = (icons: Icons, tags: Tags, query: string) => {
  if (icons.length > 0 && query) {
    return icons.filter(([name]) => {
      if (tags) {
        const iconTags = tags[name] ? tags[name] : [];

        return iconTags.some((tag: string) =>
          tag.toLowerCase().includes(query)
        );
      }
    });
  }
  return icons;
};

export const filterIconTypes = (icons: Icons, iconType: string | null) => {
  if (icons.length > 0 && iconType !== null) {
    return icons?.filter(([name]) => {
      const lastString = name.toLowerCase().split("").at(-1) as string;

      const isBold = (lastString: string) => {
        if (lastString === "b") {
          return true;
        }
      };

      const linearIcons = () => [name].some(() => !isBold(lastString));
      const boldIcons = () => [name].some(() => isBold(lastString));

      if (iconType === "linear") {
        return linearIcons();
      }
      if (iconType === "bold") {
        return boldIcons();
      }
      return name;
    });
  }
  return icons;
};

export const filterCategories = (
  icons: Icons,
  categories: Tags,
  category: string
) => {
  if (icons.length > 0 && categories) {
    const iconCategories = categories[category] ? categories[category] : [];

    return icons.filter(([name, iconNode]) => {
      if (iconCategories.includes(name)) {
        return [name, iconNode];
      }
    });
  }
  return icons;
};
