import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";
import useProductSearch from "../../hooks/useProductSearch";
import Input from "../../ui/Input";
import NotFoundCart from "../../ui/NotFoundCart";
import Product from "../../ui/Product";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

function Categories() {
  const { categories } = useLoaderData();
  const { t: translate } = useTranslation();
  const { query, setQuery, foundProduct, searched } =
    useProductSearch(categories);

  return (
    <Stack spacing={1.5}>
      <Input
        placeholder={translate("salePage.searchQuery")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {searched && !foundProduct && query.length >= 3 ? (
        <NotFoundCart />
      ) : (
        <SalesContent>
          {foundProduct ? (
            <Product product={foundProduct} key={foundProduct.code} />
          ) : (
            categories.map((category) => (
              <CategoriItem key={category.id} category={category} />
            ))
          )}
        </SalesContent>
      )}
    </Stack>
  );
}

export async function loader() {
  const categories = await getCategories();
  return { categories };
}

export default Categories;
