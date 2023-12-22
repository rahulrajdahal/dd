import React from "react";

import { fetchIconCategories, fetchIconNodes, fetchIconTags } from "./action";
import Home from "./Home";
import Icons from "./Icons";

export default async function page() {
  const [iconsNodes, tags, categories] = await Promise.all([
    fetchIconNodes(),
    fetchIconTags(),
    fetchIconCategories(),
  ]);

  return <Home iconsNodes={iconsNodes} tags={tags} categories={categories} />;
}
