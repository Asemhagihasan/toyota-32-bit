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
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
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
            { name: "AllProducts", to: "/salesPage/allProducts" },
            { name: "Favorit products", to: "/salesPage/favoritProducts" },
          ]}
        />
      </Stack>
    </>
  );
}

export default LocationSetter;
