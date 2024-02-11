import { IconType } from "@/utils/createMeistericon";


export const fetchIconNodes = async (tags?: string[], categories?: string[]) => {
  try {
    const iconNodesResp = await fetch(
      "https://unpkg.com/meistericons@latest/icon-nodes.json"
    )
    const iconNodes = await iconNodesResp.json()

    if (tags) {
      return Object.entries(iconNodes).filter(([key, _value]) => (tags.includes(key)))
    }
    if (categories) {
      return Object.entries(iconNodes).filter(([key, _value]) => (categories.includes(key)))
    }
    const icons = Object.entries(iconNodes)
    return icons
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchIconTags = async (q: string, type: IconType) => {
  try {
    const response = await fetch(
      "https://unpkg.com/meistericons@latest/tags.json"
    ).then((res) => res.json());

    if (q) {
      const tagIcons = Object.entries(response).filter(([_key, value]) => (value as string[]).includes(q)).map(([key, _value]) => key)
      if (type) {
        return filterIconType(type, tagIcons)
      }
      return tagIcons
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchIconCategories = async (category: string, type: IconType) => {
  try {
    const response = await fetch(
      "https://unpkg.com/meistericons@latest/categories.json"
    ).then((res) => res.json());

    if (category) {
      const categoryIcons = Object.entries(response).filter(([key, _value]) => (key).includes(category))
      if (type) {
        const icons = categoryIcons[0][1] as string[];
        return filterIconType(type, icons)
      }
      return categoryIcons.map(([_key, value]) => value)[0] as string[]
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const filterIconType = (type: IconType, iconNodes: string[]) => {
  if (type === 'bold') {
    return iconNodes.filter((iconNode) => (iconNode.toLowerCase().split('').at(-1) == 'b'))
  }

  if (type === 'linear') {
    return iconNodes.filter((iconNode) => (iconNode.toLowerCase().split('').at(-1) !== 'b'))
  }

  return iconNodes



}


// export const fetchIconCategories = async () => {
//   try {
//     const response = await fetch(
//       "https://unpkg.com/meistericons@latest/categories.json"
//     ).then((res) => res.json());

//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
