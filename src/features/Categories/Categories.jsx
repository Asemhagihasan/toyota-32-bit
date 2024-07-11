import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";
import { Stack } from "@mui/material";

function Categories() {
  const { categories } = useLoaderData();

  return (
    <Stack spacing={1.5}>
      <SalesContent>
        {categories.map((category) => (
          <CategoriItem key={category.id} category={category} />
        ))}
      </SalesContent>
    </Stack>
  );
}

export async function loader() {
  const categories = await getCategories();
  return { categories };
}

export default Categories;
