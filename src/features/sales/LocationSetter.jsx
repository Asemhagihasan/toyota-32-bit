import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useIsActiveLink } from "../../hooks/useIsActiveLink";
import { useTranslation } from "react-i18next";

function LocationSetter() {
  const { t: translate } = useTranslation();

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          overflowX: "scroll",
        }}
      >
        <Link
          style={{ marginRight: "1rem" }}
          className={`linkBtn ${
            useIsActiveLink("/salesPage/categories") ? "activeLink" : ""
          }`}
          to="categories"
        >
          {translate("setLocation.categories")}
        </Link>
        <button
          style={{ marginRight: "1rem" }}
          className={`linkBtn ${
            useIsActiveLink("/salesPage/categories/:")
              ? "activeLink"
              : "disableBtn"
          }`}
          to="products"
          disabled
        >
          {translate("setLocation.products")}
        </button>
        <Link
          style={{ marginRight: "1rem" }}
          className={`linkBtn ${
            useIsActiveLink("/salesPage/qrscanner") ? "activeLink" : ""
          }`}
          to="qrscanner"
        >
          {translate("setLocation.scanner")}
        </Link>
        <Link
          style={{ marginRight: "1rem" }}
          className={`linkBtn ${
            useIsActiveLink("/salesPage/productsWithNoBarcode")
              ? "activeLink"
              : ""
          }`}
          to="productsWithNoBarcode"
        >
          {translate("setLocation.productWithoutBarcode")}
        </Link>
      </Stack>
    </>
  );
}

export default LocationSetter;
