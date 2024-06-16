import { Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsActiveLink } from "../../hooks/useIsActiveLink";
import { useTranslation } from "react-i18next";
import MenuList from "../../ui/MenuList";

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
        <MenuList
          title="Show Price"
          sx={{ width: "174px" }}
          items={[
            {
              description: "All Products",
              handelClick: () => {
                if (location.pathname !== "/salesPage/allProducts") {
                  navigate("/salesPage/allProducts");
                }
                return;
              },
            },
            {
              description: "Favorit products",
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
