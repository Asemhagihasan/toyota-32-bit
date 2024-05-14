import { useEffect, useState } from "react";

function useProductSearch(categories, initialQuery = "") {
  const [foundProduct, setFoundProduct] = useState(null);
  const [searched, setSearched] = useState(false);
  const [query, setQuery] = useState(initialQuery);
  useEffect(() => {
    if (!query) {
      setFoundProduct(null);
      return;
    }
    let item = {};
    for (const category of categories) {
      if (category.children) {
        if (!isNaN(+query)) {
          item = category.children.find((item) => item.productCode === +query);
        } else {
          item = category.children.find(
            (item) => item.name.toUpperCase() === query.toUpperCase()
          );
        }
        if (item) {
          setSearched(true);
          setFoundProduct(item);
          return;
        }
      }
    }
    setSearched(true);
    setFoundProduct(null);
  }, [query, categories]);

  return { query, setQuery, foundProduct, searched };
}

export default useProductSearch;
