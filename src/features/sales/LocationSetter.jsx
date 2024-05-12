import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useIsActiveLink } from "../../hooks/useIsActiveLink";
import { useTranslation } from "react-i18next";
import ItemList from "../../ui/ItemList";

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
          className={`linkBtn ${
            useIsActiveLink("/salesPage/categories") ? "activeLink" : ""
          }`}
          to="categories"
        >
          {translate("setLocation.categories")}
        </Link>
        <button
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
          className={`linkBtn ${
            useIsActiveLink("/salesPage/qrscanner") ? "activeLink" : ""
          }`}
          to="qrscanner"
        >
          {translate("setLocation.scanner")}
        </Link>
        <ItemList
          items={[
            { name: "AllProducts", to: "/salesPage/productsWithNoBarcode" },
            { name: "AllProducts", to: "/salesPage/productsWithNoBarcode" },
            { name: "AllProducts", to: "/salesPage/productsWithNoBarcode" },
          ]}
        />
      </Stack>
    </>
  );
}

export default LocationSetter;
