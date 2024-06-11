import { Box, Divider, Stack, Typography } from "@mui/material";
import CaseConnectionStatus from "../Home/CaseConnectionStatus";
import { useAuth } from "../../context/AuthContext";

function Footer() {
  const { user } = useAuth();
  return (
    <Box mt={2}>
      <Divider />
      <Box
        component="footer"
        sx={{
          width: "100%",
          height: "50px",
          padding: "1rem 1rem",
          color: "#000",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">Satici / {user.userName}</Typography>
        <Stack flexDirection="column" alignItems="center">
          <Typography variant="subtitle2">Satis belegesi</Typography>
          <Typography variant="subtitle2">1057/1/10.0.2.16</Typography>
        </Stack>
        <CaseConnectionStatus />
      </Box>
    </Box>
  );
}

export default Footer;
