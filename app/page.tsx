import { IconType } from "@/utils/createMeistericon";
import Home from "./Home";
import { fetchIconCategories, fetchIconNodes, fetchIconTags } from "./action";

type IPage = Readonly<{
  searchParams: { q: string; type: IconType; category: string };
}>;
export default async function page({
  searchParams: { q, category, type },
}: IPage) {
  const [tags, categories] = await Promise.all([
    fetchIconTags(q, type),
    fetchIconCategories(category, type),
  ]);
  const iconsNodes = await fetchIconNodes(tags, categories);

  return <Home iconsNodes={iconsNodes} />;
}
