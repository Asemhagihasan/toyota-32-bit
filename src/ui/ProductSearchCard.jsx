import { Card, Popper, Stack } from "@mui/material";
import useProductSearch from "../hooks/useProductSearch";
import CustomInput from "./CustomInput";

function ProductSearchCard({ data }) {
  const { query, setQuery, foundProduct, searched } = useProductSearch(data);
  return (
    <>
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
      {searched && !foundProduct ? (
        <Stack>No Item</Stack>
      ) : (
        foundProduct && (
          <Card
            placement="bottom-start"
            transition
            disablePortal
            sx={{
              width: "612px",
              height: "100px",
              marginTop: "0 !important",
              borderTopRightRadius: "0",
              borderTopLeftRadius: "0",
              padding: "1rem 2rem",
              boxSizing: "border-box",
            }}
          >
            {foundProduct?.name}
          </Card>
        )
      )}
    </>
  );
}

export default ProductSearchCard;
