export const fetchIconNodes = async () => {
  try {
    const response = await fetch(
      "https://unpkg.com/meistericons@latest/icon-nodes.json"
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchIconTags = async () => {
  try {
    const response = await fetch(
      "https://unpkg.com/meistericons@latest/tags.json"
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchIconCategories = async () => {
  try {
    const response = await fetch(
      "https://unpkg.com/meistericons@latest/categories.json"
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
