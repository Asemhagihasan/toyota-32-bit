import { IconButton, Stack, Typography } from "@mui/material";

function QuantityControl() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: { xs: "100px", md: "130px" },
        height: "35px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2rem",
      }}
    >
      <IconButton sx={{ width: "30px", height: "30px" }}>+</IconButton>
      <Typography variant="subtitle2" sx={{ color: "gray", fontSize: "16px" }}>
        2
      </Typography>
      <IconButton sx={{ width: "30px", height: "30px" }}>-</IconButton>
    </Stack>
  );
}

export default QuantityControl;
