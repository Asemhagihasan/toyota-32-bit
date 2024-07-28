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
          {translate("salePage.categories")}
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
          {translate("salePage.products")}
        </button>
        <Link
          className={`linkBtn ${
            useIsActiveLink("/salesPage/qrscanner") ? "activeLink" : ""
          }`}
          to="qrscanner"
        >
          {translate("salePage.scanner")}
        </Link>
        <Link
          className={`linkBtn ${
            useIsActiveLink("/salesPage/filtredProducts") ? "activeLink" : ""
          }`}
          to="filtredProducts"
        >
          {translate("salePage.PriceView")}
        </Link>
      </Stack>
    </>
  );
}

export default LocationSetter;
