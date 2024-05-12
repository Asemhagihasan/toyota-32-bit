import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getProducts } from "../../services/saleContentApi";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FilteredProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const location = useLocation();
  const isFavoritSelected = location.pathname === "/salesPage/favoritProducts";

  function handelLoade() {
    setPage((prev) => prev + 1);
  }

  useEffect(() => {
    setProducts([]);
  }, [location]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getProducts(page);
        if (isFavoritSelected) {
          const FilteredByIsFavorit = data.filter((item) => {
            return item.isFavorit === true;
          });
          setProducts((prev) => [...prev, ...FilteredByIsFavorit]);
        } else {
          setProducts((prev) => [...prev, ...data]);
        }

        setIsLoading(false);
        setErrMessage(null);
      } catch (err) {
        setErrMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [page, isFavoritSelected]);

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

export default FilteredProducts;
