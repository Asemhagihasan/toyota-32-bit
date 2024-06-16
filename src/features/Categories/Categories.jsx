import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";
import useProductSearch from "../../hooks/useProductSearch";
import CustomInput from "../../ui/CustomInput";
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
      <CustomInput
        text={translate("salePage.searchQuery")}
        sx={{
          "--Input-focusedHighlight":
            "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, var(--color-brand-600)))) !important",
        }}
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
