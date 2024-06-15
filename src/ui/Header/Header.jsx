import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AuthButton from "../../features/authentication/AuthButton";
import Content from "./Content";
import LanguageSelector from "../../translation/LanguageSelector";

function Header({ handelButton }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        height: "2.5rem",
        position: "sticky",
        top: "0",
        backgroundColor: "var(--color-grey-0)",
        borderBottom: "1px solid var(--color-grey-200)",
        justifyContent: "space-between",
        zIndex: 103,
        color: "#fff",
      }}
    >
      <Content>
        <IconButton
          sx={{ "&:hover": { backgroundColor: "var(--color-grey-0)" } }}
          aria-label="menu-icon"
          onClick={handelButton}
        >
          <MenuIcon
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "var(--color-grey-700)",
              ml: "0.875rem",
            }}
          />
        </IconButton>
      </Content>
      <Content>
        <LanguageSelector />
        <AuthButton />
      </Content>
    </Stack>
  );
}

export default Header;
