import { IconButton } from "@/components";
import { createMeistericon } from "@/utils/createMeistericon";
import { IconNode } from "@/utils/helpers";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export type IIcons = {
  icons: [string, unknown][];
};
export default React.memo(function Iconss({ icons }: Readonly<IIcons>) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`grid grid-cols-5 place-items-center  mt-20 mb-[140px]
      md:gap-x-[8.75rem] md:gap-y-[3.75rem] md:px-[2%]
      lg:grid-cols-10
      2xl:px-[14.79%] `}
    >
      {icons?.map(([name, iconNode]) => (
        <IconButton
          key={name}
          name={name}
          component={createMeistericon(name, iconNode as IconNode[])}
          icons={icons}
        />
      ))}
    </motion.div>
  );
});
