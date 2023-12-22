import {
  IconNode,
  Icons,
  Tags,
  filterCategories,
  filterTags,
} from "@/utils/helpers";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function useCategory(iconNodes: IconNode[], categories: Tags) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.includes("-and-")
    ? searchParams.get("category")?.replaceAll("-and-", "&")
    : searchParams.get("category")?.replaceAll("-", " ");
  const icons = React.useMemo(() => {
    if (iconNodes) {
      return Object.entries(iconNodes);
    }
    return [];
  }, [iconNodes]) as unknown as Icons;

  const searchCategory = category?.toLowerCase();

  const filteredCategories = filterCategories(
    icons,
    categories,
    searchCategory ?? ""
  );

  const categoryIcons = React.useMemo(() => {
    if (searchCategory === "all icons") return icons;
    return filteredCategories;
  }, [searchCategory, icons, filteredCategories]);

  return { icons: categoryIcons };
}
