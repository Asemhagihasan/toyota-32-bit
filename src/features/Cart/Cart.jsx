import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../../ui/CloseButton";
import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";
import { useTranslation } from "react-i18next";

function Cart({ setMakePayment }) {
  const [clicked, setClicked] = useState(false);
  const { getCart, total, dispatch, reduction } = useCart();
  const { t: translate } = useTranslation();
  const cartItems = getCart();

  useEffect(() => {
    if (cartItems.length === 0) {
      setClicked(false);
    }
  }, [cartItems]);
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
            color: "var(--color-brand-600)",
          }}
        >
          {translate("salePage.openCart")}
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
          backgroundColor: " var(--color-grey-0)",
          borderTopLeftRadius: "12px",
          transition: "width .4s",
          boxShadow: "0 3px 5px rgba(0,0,0,.15)",
          zIndex: 100,
        }}
      >
        <Box>
          <CloseIcon
            onClick={(e) => {
              setClicked(!e);
            }}
          />
          <Divider />
          {!cartItems.length && <EmptyCart />}
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </Box>
        {cartItems.length > 0 && clicked && (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "rgb(19, 35, 55)",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            {reduction && (
              <Typography
                variant="subtitle2"
                sx={{
                  padding: "0.4rem 1.2rem",
                  color: "var(--color-brand-50)",
                  fontSize: "16px",
                }}
              >
                {reduction.description} {translate("salePage.reductionApplied")}
              </Typography>
            )}
            <CartTotal
              content={{
                text: `${translate("salePage.subTotal")}`,
                total: total.subTotal,
              }}
            />
            <CartTotal
              content={{
                text: `${translate("salePage.totalAmount")}`,
                total: total.totalAmount,
              }}
            />
            <Box sx={{ paddingLeft: "0.8rem" }}>
              <Button
                onClick={() => dispatch({ type: "clearCart" })}
                color="error"
              >
                {translate("salePage.cancelDocument")}
              </Button>
              <Button
                onClick={() => {
                  setClicked(false);
                  setMakePayment(true);
                }}
                sx={{ color: "orange" }}
              >
                {translate("salePage.finishPay")}
              </Button>
            </Box>
          </Box>
        )}
      </Stack>
    </>
  );
}

export default Cart;
