import { useSearchParams } from "next/navigation";
import React from "react";

export default function useCreateQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return createQueryString;
}
