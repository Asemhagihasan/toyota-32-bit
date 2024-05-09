import { Avatar, Box, Stack, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SellIcon from "@mui/icons-material/Sell";
import UndoIcon from "@mui/icons-material/Undo";
import StoreIcon from "@mui/icons-material/Store";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
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

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "92vh" },
        flexDirection: "column",
        width: "4.5rem",
        boxShadow: "0 3px 5px rgba(0,0,0,.15)",
        backgroundColor: "#f5f5f5",
        position: "absolute",
        top: "0",
        // left: "0",
        left: !sideBarIsOpen
          ? { xs: "-4.5rem", s: "-4.5rem", md: "-4.5rem", lg: "0" }
          : "0",
        // display: !sideBarIsOpen
        //   ? { xs: "none", s: "none", md: "none", lg: "block" }
        //   : {},
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
                sx={{ fontSize: "1rem", color: "#000", fontWeight: "600" }}
              >
                {translate("sideBarItems.user")}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "grey",
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
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/salesPage/categories">
        <ShoppingCartIcon sx={{ color: "#5BBCFF", fontSize: "1.5rem" }} />
        {sideBarIsOpen && <Content>{translate("sideBarItems.sales")}</Content>}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <SellIcon sx={{ color: "#D20062", fontSize: "1.5rem" }} />
        {sideBarIsOpen && (
          <Content> {translate("sideBarItems.PriceView")}</Content>
        )}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <UndoIcon sx={{ color: "#D20062", fontSize: "1.5rem" }} />
        {sideBarIsOpen && (
          <Content> {translate("sideBarItems.returnTransactions")}</Content>
        )}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <StoreIcon sx={{ color: "#6C22A6", fontSize: "1.5rem" }} />
        {sideBarIsOpen && (
          <Content> {translate("sideBarItems.directProductEntry")}</Content>
        )}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <CollectionsIcon sx={{ color: "#6C22A6", fontSize: "1.5rem" }} />
        {sideBarIsOpen && (
          <Content>{translate("sideBarItems.collections")}</Content>
        )}
      </Item>
      <Item setSideBarIsOpen={setSideBarIsOpen} to="/">
        <SettingsIcon sx={{ color: "#96E9C6", fontSize: "1.5rem" }} />
        {sideBarIsOpen && (
          <Content>{translate("sideBarItems.Settings")}</Content>
        )}
      </Item>
    </Stack>
  );
}

export default SideBar;
