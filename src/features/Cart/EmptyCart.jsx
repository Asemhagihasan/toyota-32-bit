import { Stack, Typography } from "@mui/material";

function EmptyCart() {
  return (
    <Stack>
      <Typography sx={{ textAlign: "center", mt: "2rem" }} variant="h6">
        cart is empty
      </Typography>
    </Stack>
  );
}
export default EmptyCart;
