import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import CustomInput from "../../ui/CustomInput";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";
import { Card, Stack } from "@mui/material";
import useProductSearch from "../../hooks/useProductSearch";

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

      {searched && !foundProduct && <Stack>No Item</Stack>}
      {foundProduct ? (
        <Card
          sx={{
            width: "612px",
            height: "100px",
            marginTop: "0 !important",
            borderTopRightRadius: "0",
            borderTopLeftRadius: "0",
            padding: "1rem 2rem",
            boxSizing: "border-box",
          }}
        >
          {foundProduct?.name}
        </Card>
      ) : (
        <SalesContent>
          {categories.map((category) => (
            <CategoriItem key={category.id} category={category} />
          ))}
        </SalesContent>
      )}
    </>
  );
}

export async function loader() {
  const categories = await getCategories();
  return { categories };
}

export default Categories;
