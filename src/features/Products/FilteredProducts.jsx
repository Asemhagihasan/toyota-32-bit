import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import { getCategories } from "../../services/saleContentApi";
import { useProducts } from "./useProducts";
import useProductSearch from "./useProductSearch";
import Product from "../../ui/Product";
import SalesContent from "../../ui/SalesContent";
import Loader from "../../ui/Loader";
import Error from "../../ui/Error";
import Input from "../../ui/Input";
import NotFoundCart from "../../ui/NotFoundCart";
import Filter from "./Filter";
function FilteredProducts() {
  const [page, setPage] = useState(1);
  const { t: translate } = useTranslation();
  const Allproducts = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get("filter") || "allProducts";
  const { query, setQuery, foundProduct, searched, showNotFound } =
    useProductSearch(Allproducts);
  const { products, isLoading, errMessage } = useProducts(page);

  function handleLoad() {
    setPage((prev) => prev + 1);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Loader isLoading={isLoading} />
      {errMessage && <Error message={errMessage} />}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Input
          placeholder={translate("salePage.searchQuery")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ maxWidth: "600px", minWidth: "310px" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            mr: "1rem",
          }}
        >
          <Box
            sx={{
              border: "1px solid var(--color-grey-100)",
              bgcolor: "var(--color-grey-0)",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
              borderRadius: "7px",
              display: "flex",
              p: "0.4rem",
              gap: "0.4rem",
            }}
          >
            {[
              {
                description: translate("salePage.AllProduct"),
                handleClick: () => {
                  searchParams.set("filter", "allProducts");
                  setSearchParams(searchParams);
                },
                active: filterParam === "allProducts",
              },
              {
                description: translate("salePage.favoriteProducts"),
                handleClick: () => {
                  searchParams.set("filter", "favorit");
                  setSearchParams(searchParams);
                },
                active: filterParam === "favorit",
              },
            ].map((item) => (
              <Box
                key={item.description}
                component="button"
                sx={{
                  bgcolor: `${
                    item.active
                      ? "var(--color-brand-600)"
                      : "var(--color-gray-0)"
                  }`,
                  color: `${
                    item.active
                      ? "var(--color-brand-50)"
                      : "var(--color-grey-700)"
                  }`,

                  border: "none",
                  borderRadius: "7px",
                  fontWeight: "500",
                  fontSize: "16px",
                  p: "0.24rem 0.8rem",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  "&:hover": {
                    bgcolor: "var(--color-brand-600)",
                    color: "var(--color-brand-50)",
                  },
                }}
                onClick={item.handleClick}
              >
                {item.description}
              </Box>
            ))}
          </Box>
          <Filter />
        </Box>
      </Box>

      {searched && !foundProduct && query.length >= 3 ? (
        <NotFoundCart />
      ) : (
        <SalesContent>
          {foundProduct ? (
            <Product product={foundProduct} key={foundProduct.id} />
          ) : (
            <>
              {products.length === 0 ? (
                <Typography>No products found try the next page</Typography>
              ) : (
                products.map((product) => (
                  <Product product={product} key={product.id} />
                ))
              )}
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
            marginTop: "1rem",
            gap: "2rem",
          }}
        >
          <button className="linkBtn" onClick={handleLoad}>
            {translate("salePage.load")}
          </button>
          {showNotFound && (
            <Typography
              variant="subtitle2"
              sx={{ minWidth: "125px", color: "var(--color-grey-700)" }}
            >
              {products.length} {translate("salePage.itemFound")}
            </Typography>
          )}
        </Container>
      )}
    </Box>
  );
}

export async function loader() {
  const products = await getCategories();
  return products;
}

export default FilteredProducts;
