import { Avatar, Box, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Item from "./Item";
import Content from "./Content";
import { useAuth } from "../../context/AuthContext";
import LinkButton from "../LinkButton";
import { useTranslation } from "react-i18next";

function SideBar({ sideBarIsOpen, setSideBarIsOpen }) {
  const { user } = useAuth();
  const { t: translate } = useTranslation();
  const sideBarOpen = sideBarIsOpen
    ? { width: "270px", zIndex: 99, boxShadow: "0 0 20px rgba(0, 0, 0, .5);" }
    : {};
  const iconStyle = { color: "var(--color-grey-400)", fontSize: "1.7rem" };

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: "92vh",
        flexDirection: "column",
        width: "4.5rem",
        boxShadow: "0 3px 5px rgba(0,0,0,.15)",
        backgroundColor: "var(--color-grey-0)",
        position: "absolute",
        top: "0",
        left: !sideBarIsOpen
          ? { xs: "-4.5rem", s: "-4.5rem", md: "-4.5rem", lg: "0" }
          : "0",
        transition: "all .4s",
        overflowX: "hidden",
        ...sideBarOpen,
      }}
    >
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/" className="account">
        <Avatar>
          <PersonIcon fontSize="1.5rem" />
        </Avatar>
        <Box>
          {user.userName && sideBarIsOpen ? (
            <>
              <Typography
                component="p"
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  color: "var(--color-grey-800)",
                  fontWeight: "600",
                }}
              >
                {translate("salePage.user")}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "var(--color-grey-500)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  textOverflow: "ellipsis",
                }}
              >
                {user.userName}
              </Typography>
            </>
          ) : (
            sideBarIsOpen && (
              <LinkButton to="/auth">
                {translate("auth.loginToGetStartedMessage")}
              </LinkButton>
            )
          )}
        </Box>
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <HomeOutlinedIcon sx={iconStyle} />
        {sideBarIsOpen && <Content>Home</Content>}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/salesPage/categories">
        <ShoppingCartOutlinedIcon sx={iconStyle} />
        {sideBarIsOpen && <Content>{translate("salePage.sales")}</Content>}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/salesPage/allProducts">
        <SellOutlinedIcon sx={iconStyle} />
        {sideBarIsOpen && <Content> {translate("salePage.PriceView")}</Content>}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/settings">
        <SettingsIcon sx={iconStyle} />
        {sideBarIsOpen && <Content>{translate("salePage.Settings")}</Content>}
      </Item>
    </Stack>
  );
}

export default SideBar;
