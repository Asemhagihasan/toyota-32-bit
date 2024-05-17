import { Box, Divider, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";

function Cart() {
  const [clicked, setClicked] = useState(false);
  const { cart } = useCart();

  return (
    <Box
      sx={{
        height: { xs: "92vh" },
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      {!clicked && (
        <button
          onClick={() => {
            setClicked((e) => !e);
          }}
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          click
        </button>
      )}
      <Stack
        sx={{
          width: {
            xs: clicked ? "300px" : "0px",
            md: clicked ? "400px" : "0px",
            lg: clicked ? "400px" : "0px",
          },
          maxWidth: "600px",
          height: "100%",
          backgroundColor: " #f5f7f8",
          borderTopLeftRadius: "12px",
          transition: "width .4s",
          boxShadow: "0 3px 5px rgba(0,0,0,.15)",
        }}
      >
        {clicked && (
          <IconButton
            onClick={() => {
              setClicked(false);
            }}
            sx={{
              width: "2rem",
              height: "2rem",
              margin: "0.7rem 0 0.5rem 1.5rem",
              border: "1px solid #e5e5e5",
              boxShadow: "0 3px 5px rgba(0,0,0,.15)",
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
        <Divider />
        {!cart.length && clicked && <EmptyCart />}
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </Stack>
    </Box>
  );
}

export default Cart;
