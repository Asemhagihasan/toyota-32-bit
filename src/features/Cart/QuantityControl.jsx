import { IconButton, Stack, Typography } from "@mui/material";
import { useCart } from "../../context/CartContext";

function QuantityControl({ quantity, productId }) {
  const { dispatch } = useCart();
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
      <IconButton
        onClick={() => {
          dispatch({ type: "increaseItemQuantity", payload: productId });
        }}
        sx={{ width: "30px", height: "30px" }}
      >
        +
      </IconButton>
      <Typography variant="subtitle2" sx={{ color: "gray", fontSize: "16px" }}>
        {quantity}
      </Typography>
      <IconButton
        onClick={() => {
          dispatch({ type: "decreaseItemQuantity", payload: productId });
        }}
        sx={{ width: "30px", height: "30px" }}
      >
        -
      </IconButton>
    </Stack>
  );
}

export default QuantityControl;
