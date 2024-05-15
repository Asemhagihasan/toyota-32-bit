import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";
import useProductSearch from "../../hooks/useProductSearch";
import CustomInput from "../../ui/CustomInput";
import { Stack } from "@mui/material";
import Product from "../../ui/Product";

function Categories() {
  const { categories } = useLoaderData();
  const { query, setQuery, foundProduct, searched } =
    useProductSearch(categories);
  return (
    <>
      <CustomInput
        text="Search by code or name"
        sx={{
          "--Input-focusedHighlight":
            "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
          borderBottomRightRadius: `${foundProduct ? "0" : ""}`,
          borderBottomLeftRadius: `${foundProduct ? "0" : ""}`,
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {searched && !foundProduct && query.length >= 3 && <Stack>No Item</Stack>}
      <SalesContent>
        {foundProduct ? (
          <Product product={foundProduct} key={foundProduct.code} />
        ) : (
          categories.map((category) => (
            <CategoriItem key={category.id} category={category} />
          ))
        )}
      </SalesContent>
    </>
  );
}

export async function loader() {
  const categories = await getCategories();
  return { categories };
}

export default Categories;
