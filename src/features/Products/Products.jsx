import { useParams } from "react-router-dom";
import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getCategoryById } from "../../services/saleContentApi";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";

function Products() {
  const [category, setCategory] = useState(null); // Changed initial state to null
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  let { id } = useParams();
  const slicedId = id.slice(1);

  useEffect(() => {
    async function fetchCategory() {
      try {
        setIsLoading(true);
        const data = await getCategoryById(slicedId);
        setCategory(data);
        setErrMessage(null);
      } catch (err) {
        setErrMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategory();
  }, [slicedId]);

  return (
    <>
      {errMessage && <Error message={errMessage} />}
      <Loader isLoading={isLoading} />
      {!errMessage &&
        !isLoading &&
        category && ( // Added null check for category
          <SalesContent>
            {Array.isArray(category.children) &&
              category.children.map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </SalesContent>
        )}
    </>
  );
}

export default Products;
