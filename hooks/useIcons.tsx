import React from "react";
import { useCategory, useIconType, useSearch } from ".";
import { IconNode, Tags } from "@/utils/helpers";
import { useSearchParams } from "next/navigation";

export default function useIcons(
  iconsNodes: IconNode[],
  tags: Tags,
  categories: Tags
) {
  const searchParams = useSearchParams();

  const { icons: searchIcons } = useSearch(iconsNodes, tags);
  const { icons: categoryIcons } = useCategory(iconsNodes, categories);

  const fetchIcons = React.useMemo(() => {
    if (searchParams.get("category")) {
      return categoryIcons;
    }
    return searchIcons;
  }, [categoryIcons, searchIcons, searchParams]);

  const { icons: typeIcons } = useIconType(fetchIcons);

  return typeIcons;
}
