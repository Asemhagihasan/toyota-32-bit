import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";

function Cart() {
  const [clicked, setClicked] = useState(false);
  const { getCart, total, dispatch, appliedPromotion, setAppliedPromotion } =
    useCart();
  const cartItems = getCart();
  if (appliedPromotion && total.subTotal < 30) setAppliedPromotion(null);
  return (
    <>
      {!clicked && (
        <Button
          onClick={() => setClicked(true)}
          sx={{
            position: "fixed",
            top: "4rem",
            right: "1rem",
            zIndex: 101,
            color: "orange",
          }}
        >
          Open Cart
        </Button>
      )}
      <Stack
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          overflowY: "auto",
          height: { xs: "92vh", md: "92vh" },
          width: {
            xs: clicked ? "300px" : "0px",
            md: clicked ? "400px" : "0px",
            lg: clicked ? "400px" : "0px",
          },
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: " #f5f7f8",
          borderTopLeftRadius: "12px",
          transition: "width .4s",
          boxShadow: "0 3px 5px rgba(0,0,0,.15)",
          zIndex: 100,
        }}
      >
        <Box>
          <IconButton
            onClick={() => setClicked(false)}
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
          <Divider />
          {!cartItems.length && <EmptyCart />}
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </Box>
        {cartItems.length > 0 && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#063970",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            {appliedPromotion && (
              <Typography
                variant="subtitle2"
                sx={{
                  padding: "0.4rem 1.2rem",
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                {appliedPromotion} kampanyasi uygulandi
              </Typography>
            )}
            <CartTotal
              content={{ text: "Ara Toplam", total: total.subTotal }}
            />
            <CartTotal
              content={{ text: "Toplam Tutar", total: total.totalAmount }}
            />
            <Box sx={{ paddingLeft: "0.8rem" }}>
              <Button
                onClick={() => dispatch({ type: "clearCart" })}
                color="error"
                sx={{}}
              >
                Belge iptal
              </Button>
              <Button sx={{ color: "orange" }}> Belge Bitir</Button>
            </Box>
          </Box>
        )}
      </Stack>
    </>
  );
}

export default Cart;
