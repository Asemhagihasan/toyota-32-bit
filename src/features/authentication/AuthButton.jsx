import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function AuthButton() {
  const { setUser, user } = useAuth();
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  function handelLogout() {
    setUser({});
    navigate("/");
  }

  function handelLogin() {
    navigate("/auth");
  }

  if (user?.isAuthenticated) {
    return (
      <>
        <Typography
          sx={{
            display: { xs: "none", s: "none", md: "block" },
            color: "var(--color-grey-700)",
          }}
          variant="h6"
        >
          {translate("auth.signOut")}
        </Typography>
        <Button onClick={handelLogout}>
          <LogoutIcon
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "var(--color-grey-700)",
            }}
          />
        </Button>
      </>
    );
  }
  return (
    <>
      <Typography variant="h6" sx={{ color: "var(--color-grey-700)" }}>
        {translate("auth.signIn")}
      </Typography>
      <Button onClick={handelLogin}>
        <LoginIcon
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "var(--color-grey-700)",
          }}
        />
      </Button>
    </>
  );
}

export default AuthButton;
