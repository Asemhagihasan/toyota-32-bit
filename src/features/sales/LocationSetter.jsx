import { Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsActiveLink } from "../../hooks/useIsActiveLink";
import { useTranslation } from "react-i18next";
import MenuList from "../../ui/MenuList";
import { Height, Padding } from "@mui/icons-material";

function LocationSetter() {
  const { t: translate } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

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
        <MenuList
          title={translate("salePage.showPrice")}
          sx={{ height: "41.5px" }}
          items={[
            {
              description: translate("salePage.AllProduct"),
              handelClick: () => {
                if (location.pathname !== "/salesPage/allProducts") {
                  navigate("/salesPage/allProducts");
                }
                return;
              },
            },
            {
              description: translate("salePage.favoriteProducts"),
              handelClick: () => {
                if (location.pathname !== "/salesPage/favoritProducts") {
                  navigate("/salesPage/favoritProducts");
                }
                return;
              },
            },
          ]}
        />
      </Stack>
    </>
  );
}

export default LocationSetter;
