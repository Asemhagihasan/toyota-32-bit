import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import { getAllProducts, getProducts } from "../../services/saleContentApi";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useProductSearch from "../../hooks/useProductSearch";
import CustomInput from "../../ui/CustomInput";
import { Box, Container, Typography } from "@mui/material";
import NotFoundCart from "../../ui/NotFoundCart";

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
  const showNotFound = !foundProduct && query.length < 3;
  function handleLoad() {
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <CustomInput
          text="Search by code or name"
          sx={{
            "--Input-focusedHighlight":
              "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
            width: "100%",
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {showNotFound && (
          <Typography variant="subtitle2" sx={{ minWidth: "125px" }}>
            {products.length} item found
          </Typography>
        )}
      </Box>

      {searched && !foundProduct && query.length >= 3 ? (
        <NotFoundCart />
      ) : (
        <SalesContent>
          {foundProduct ? (
            <Product product={foundProduct} key={foundProduct.id} />
          ) : (
            <>
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
              <Box
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></Box>
            </>
          )}
        </SalesContent>
      )}
      {showNotFound && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="linkBtn" onClick={handleLoad}>
            Load
          </button>
        </Container>
      )}
    </>
  );
}

export async function loader() {
  const products = await getAllProducts();
  return products;
}

export default FilteredProducts;
