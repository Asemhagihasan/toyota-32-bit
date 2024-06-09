import { Stack, Typography } from "@mui/material";

function CartTotal({ content }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        padding: "0.4rem 1.2rem",
        color: "#fff",
        fontSize: "16px",
      }}
    >
      <Typography variant="subtitle2">{content.text}</Typography>
      <Typography variant="subtitle2">{content.total} $</Typography>
    </Stack>
  );
}

export default CartTotal;
