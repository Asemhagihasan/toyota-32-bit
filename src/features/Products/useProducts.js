import { useEffect, useState } from "react";
import { getProducts } from "../../services/saleContentApi";
import { useSearchParams } from "react-router-dom";

export function useProducts(page) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter") || "allProducts";
  const alphaFilterParam = searchParams.get("alphaFilter");

  async function fetchProductsByPageNumber(page) {
    try {
      setIsLoading(true);
      const data = await getProducts(page);
      setIsLoading(false);
      setErrMessage(null);
      return data;
    } catch (err) {
      setErrMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function applyFilters(products, filterParam, alphaFilterParam) {
    let filteredProducts = products;

    if (filterParam && filterParam !== "allProducts") {
      filteredProducts = filteredProducts.filter(
        (product) => product.isFavorit
      );
    }

    if (alphaFilterParam) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.startsWith(alphaFilterParam[0] || alphaFilterParam[1])
      );
    }

    return filteredProducts;
  }

  useEffect(() => {
    async function fetchProducts() {
      const newProducts = await fetchProductsByPageNumber(page);
      setProducts((prev) => [...prev, ...newProducts]);
    }

    fetchProducts();
  }, [page]);

  const filteredProducts = applyFilters(
    products,
    filterParam,
    alphaFilterParam
  );
  return { products: filteredProducts, isLoading, errMessage };
}
