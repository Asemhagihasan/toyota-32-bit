import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getProducts } from "../../services/saleContentApi";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import { useEffect, useState } from "react";

function AllProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  function handelLoade() {
    setPage((prev) => prev + 1);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getProducts(page);
        setProducts((prev) => [...prev, ...data]);
        setIsLoading(false);
        setErrMessage(null);
      } catch (err) {
        setErrMessage("Fiald geting data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <>
      {errMessage && <Error message={errMessage} />}
      <Loader isLoading={isLoading} />
      <SalesContent>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </SalesContent>
      {products.length !== 0 && <button onClick={handelLoade}>Loade</button>}
    </>
  );
}

export default AllProducts;
