import React from "react";

export default function loading() {
  return (
    <div role="log" className="w-full animate-pulse">
      <div className="w-full h-[25rem] bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>

      {Array(3)
        .fill(0)
        .map((_, i) => (
          <React.Fragment key={i.toPrecision()}>
            <div className="w-32 h-12 mt-12 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>
            <div className="w-80 h-12 mt-2 bg-gray-200  rounded-md dark:bg-gray-700 mb-4"></div>
          </React.Fragment>
        ))}
    </div>
  );
}
