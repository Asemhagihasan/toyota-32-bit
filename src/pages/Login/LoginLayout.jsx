import { Box } from "@mui/material";
import LoginForm from "../../features/authentication/LoginForm";
import Logo from "../../ui/Logo";

function LoginLayout() {
  return (
    <Box
      sx={{
        // width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <Logo />
      <LoginForm />
    </Box>
  );
}

export default LoginLayout;
