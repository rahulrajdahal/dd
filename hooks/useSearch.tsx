import { IconNode, Icons, Tags, filterTags } from "@/utils/helpers";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function useSearch(icons: Icons, tags: Tags) {
  const searchParams = useSearchParams();
  const query = React.useMemo(() => searchParams.get("q"), [searchParams]);

  const filteredIcons = filterTags(icons, tags, query?.toLowerCase() ?? "");

  const searchIcons = React.useMemo(() => {
    if (!query) return icons;

    return filteredIcons;
  }, [query, icons, filteredIcons]);

  return { icons: searchIcons };
}
