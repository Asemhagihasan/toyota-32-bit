import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getAllProducts, getProducts } from "../../services/saleContentApi";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useProductSearch from "../../hooks/useProductSearch";
import CustomInput from "../../ui/CustomInput";
import { Stack } from "@mui/material";

function FilteredProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const location = useLocation();
  const Allproducts = useLoaderData();
  const isFavoritSelected = location.pathname === "/salesPage/favoritProducts";
  const { query, setQuery, foundProduct, searched } =
    useProductSearch(Allproducts);

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
      <Loader isLoading={isLoading} />
      {errMessage && <Error message={errMessage} />}
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
          <Product product={foundProduct} key={foundProduct.id} />
        ) : (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </SalesContent>
      {products.length !== 0 && !foundProduct && (
        <button onClick={handelLoade}>Loade</button>
      )}
    </>
  );
}

export async function loader() {
  const products = await getAllProducts();
  return products;
}

export default FilteredProducts;
