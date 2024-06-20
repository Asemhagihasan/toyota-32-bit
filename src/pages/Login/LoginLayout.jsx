import { Stack } from "@mui/material";
import LoginForm from "../../features/authentication/LoginForm";
import Logo from "../../ui/Logo";

function LoginLayout() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        gap: { md: "3rem" },
      }}
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Logo />
      <LoginForm />
    </Stack>
  );
}

export default LoginLayout;
