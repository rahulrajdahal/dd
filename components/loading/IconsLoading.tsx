import React from "react";

export default function IconsLoading() {
  return (
    <div role="log" className="w-full animate-pulse">
      <div className="grid md:gap-20 mt-12 grid-cols-5 place-items-center xl:grid-cols-10 px-[12.5%]">
        {Array(30)
          .fill(0)
          .map((_, i) => (
            <div
              key={i.toPrecision()}
              className="w-12 h-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"
            ></div>
          ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
