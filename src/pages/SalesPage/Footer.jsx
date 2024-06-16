import { Box, Divider, Stack, Typography } from "@mui/material";
import CaseConnectionStatus from "../Home/CaseConnectionStatus";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

function Footer() {
  const { user } = useAuth();
  const { t: translate } = useTranslation();
  return (
    <Box mt={2}>
      <Divider />
      <Box
        component="footer"
        sx={{
          width: "100%",
          height: "50px",
          padding: "1rem 1rem",
          color: "var(--color-grey-700)",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">
          {translate("salePage.seller")} / {user.userName}
        </Typography>
        <Stack flexDirection="column" alignItems="center">
          <Typography variant="subtitle2">
            {translate("salePage.salesReceipt")}
          </Typography>
          <Typography variant="subtitle2">1057/1/10.0.2.16</Typography>
        </Stack>
        <CaseConnectionStatus />
      </Box>
    </Box>
  );
}

export default Footer;
