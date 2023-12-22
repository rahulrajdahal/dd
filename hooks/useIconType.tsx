import React from "react";
import { useSearchParams } from "next/navigation";
import { Icons, filterIconTypes } from "@/utils/helpers";

export default function useIconType(icons: Icons) {
  const searchParams = useSearchParams();
  const iconType = searchParams.get("type");

  const filteredIcons = React.useMemo(
    () => filterIconTypes(icons, iconType),
    [iconType, icons]
  );

  const iconTypeIcons = React.useMemo(() => {
    if (filteredIcons) {
      return { icons: filteredIcons };
    }
    return { icons };
  }, [filteredIcons, icons]);

  return iconTypeIcons;
}
