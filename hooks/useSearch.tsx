import { IconNode, Icons, Tags, filterTags } from "@/utils/helpers";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function useSearch(iconNodes: IconNode[], tags: Tags) {
  const searchParams = useSearchParams();
  const query = React.useMemo(() => searchParams.get("q"), [searchParams]);

  const icons = React.useMemo(() => {
    if (iconNodes) {
      return Object.entries(iconNodes);
    }
    return [];
  }, [iconNodes]) as unknown as Icons;

  const filteredIcons = filterTags(icons, tags, query?.toLowerCase() ?? "");

  const searchIcons = React.useMemo(() => {
    if (!query) return icons;

    return filteredIcons;
  }, [query, icons, filteredIcons]);

  return { icons: searchIcons };
}
