import { Box } from "@mui/material";
import LoginForm from "../../features/authentication/LoginForm copy";
import Logo from "../../ui/Logo";

function LoginLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "48rem",
        alignContent: "center",
        justifyContent: "center",
        gap: "2rem",
        backgroundColor: "var(--color-grey-50)",
      }}
    >
      <Logo />
      <LoginForm />
    </Box>
  );
}

export default LoginLayout;
