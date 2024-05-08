import { useParams } from "react-router-dom";
import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getCategoryById } from "../../services/saleContentApi";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import { Typography } from "@mui/material";

function Products() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  const slicedId = id.slice(1);

  useEffect(() => {
    function fetchCategory() {
      setIsLoading(true);
      getCategoryById(slicedId)
        .then((data) => {
          setCategory(data?.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching category:", error);
        })
        .finally(setIsLoading(false));
    }
    fetchCategory();
  }, [slicedId]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <SalesContent>
        {Array.isArray(category.children) ? (
          category?.children.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <Typography>
            Something went wrong while getting products. 😢
          </Typography>
        )}
      </SalesContent>
    </>
  );
}

export default Products;
