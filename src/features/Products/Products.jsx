import { useLoaderData } from "react-router-dom";
import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getCategoryById } from "../../services/saleContentApi";

function Products() {
  const category = useLoaderData();

  return (
    <>
      <SalesContent>
        {Array.isArray(category.children) &&
          category.children.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </SalesContent>
    </>
  );
}

export default Products;

export async function loader({ params }) {
  const slicedId = params.id.slice(1);
  const category = await getCategoryById(slicedId);
  return category;
}
