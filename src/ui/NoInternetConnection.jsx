import { Box, Typography } from "@mui/material";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";

function NoInternetConnection() {
  return (
    <Typography
      variant="h5"
      textAlign="center"
      sx={{ mt: "2rem", color: "gray" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <SignalWifiOffIcon />
        <Typography variant="h6">No Internet Connection</Typography>
        <Typography variant="body1">
          Your store is currently offline. You cannot make sales at the moment.
          Please check your internet connection.
        </Typography>
      </Box>
    </Typography>
  );
}

export default NoInternetConnection;
