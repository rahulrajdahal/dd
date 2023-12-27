import { IconsLoading } from "@/components";
import React from "react";

export default function loading() {
  return (
    <>
      <div
        role="log"
        className="w-full animate-pulse flex items-center flex-col"
      >
        <div className="max-w-[10rem] my-4 w-full h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>

        <div className="flex items-center my-16 w-full flex-col">
          <div className="w-full max-w-[40rem] h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>
          <div className="max-w-[30rem] w-full h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>
        </div>

        <div className="flex my-12 items-center gap-4 justify-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i.toPrecision()}
                className="w-12 h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"
              ></div>
            ))}
        </div>

        <div className="w-full  h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>

        <span className="sr-only">Loading...</span>
      </div>

      <IconsLoading />
    </>
  );
}
