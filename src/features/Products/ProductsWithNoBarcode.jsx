import { useState } from "react";
import { Typography } from "@mui/material";
import Loader from "../../ui/Loader";
import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { arr } from "../../productsWithoutBarcode";

function ProductsWithNoBarcode() {
  const [isLoading, setIsLoading] = useState(false); // Define isLoading state

  return (
    <>
      <Loader isLoading={isLoading} />
      <SalesContent>
        {arr.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </SalesContent>
    </>
  );
}

export default ProductsWithNoBarcode;
