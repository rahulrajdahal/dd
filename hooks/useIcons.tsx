import React from "react";
import { useCategory, useIconType, useSearch } from ".";
import { IconNode, Icons, Tags } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";

export default function useIcons(
  iconsNodes: IconNode[],
  tags: Tags,
  categories: Tags,
  limit: number
) {
  const searchParams = useSearchParams();

  const icons = React.useMemo(() => {
    if (iconsNodes) {
      return Object.entries(iconsNodes);
    }
    return [];
  }, [iconsNodes]) as unknown as Icons;

  const { icons: searchIcons } = useSearch(icons.slice(0, limit), tags);
  const { icons: categoryIcons } = useCategory(
    icons.slice(0, limit),
    categories
  );

  const fetchIcons = React.useMemo(() => {
    if (searchParams.get("category")) {
      return categoryIcons;
    }
    return searchIcons;
  }, [categoryIcons, searchIcons, searchParams]);

  const { icons: typeIcons } = useIconType(fetchIcons);

  return typeIcons;
}
