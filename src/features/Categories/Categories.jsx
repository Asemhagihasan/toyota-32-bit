import CategoriItem from "./CategoriItem";
import SalesContent from "../../ui/SalesContent";
import { getCategories } from "../../services/saleContentApi";
import { useLoaderData } from "react-router-dom";

function Categories() {
  const categories = useLoaderData();
  return (
    <>
      <SalesContent>
        {categories.map((category) => (
          <CategoriItem key={category.id} category={category} />
        ))}
      </SalesContent>
    </>
  );
}

export async function loader() {
  const categories = await getCategories();
  return categories;
}

export default Categories;
