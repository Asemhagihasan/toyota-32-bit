import { Stack, Typography } from "@mui/material";
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
        backgroundColor: "#333",
        justifyContent: "space-between",
        zIndex: "13",
        color: "#fff",
      }}
    >
      <Content>
        <IconButton aria-label="menu-icon" onClick={handelButton}>
          <MenuIcon
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#fff",
              ml: "0.875rem",
            }}
          />
        </IconButton>
        {/* <Typography variant="h5">Item List</Typography> */}
      </Content>
      <Content>
        <LanguageSelector />
        <AuthButton />
      </Content>
    </Stack>
  );
}

export default Header;
