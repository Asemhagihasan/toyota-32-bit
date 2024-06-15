import { Stack, Typography } from "@mui/material";

function EmptyCart() {
  return (
    <Stack>
      <Typography
        sx={{ textAlign: "center", mt: "2rem", color: "var(--color-grey-700)" }}
        variant="h6"
      >
        cart is empty
      </Typography>
    </Stack>
  );
}
export default EmptyCart;
