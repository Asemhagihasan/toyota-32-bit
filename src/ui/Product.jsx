import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useInputControl } from "../context/InputControlContext";

function Product({ product }) {
  const cardStyles = {
    width: { xs: "115px", sm: "125px", md: "145px" },
    backgroundColor: "var(--color-grey-0)",
    height: "230px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.075)",
    transition: "all 200ms",
    position: "relative",
    ...(product.isFavorit && {
      "&::after": {
        content: '"Best seller"', // Note the quotes around the value
        position: "absolute",
        top: "6%",
        right: "-18%",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "700",
        color: "var(--color-brand-50)",
        backgroundColor: "var(--color-brand-600)",
        padding: "8px 15px",
        transform: "rotate(45deg)",
      },
    }),
  };
  const { dispatch, getCurrentQuantity } = useCart();
  const { value, setValue, keyboard } = useInputControl();
  const { id, barcode, name, price, image, unit, KDV } = product;
  const priceAfterTax = (price + price * KDV).toFixed(2);
  const totalPriceAfterTax = parseFloat(
    (price * (+value || 1) + KDV * (+value || 1) * price).toFixed(2)
  );
  const currentQuantity = getCurrentQuantity(id);
  const isInCart = currentQuantity > 0;
  function handelClick() {
    if (!isInCart) {
      const newItem = {
        productId: id,
        barcode: barcode,
        name: name,
        quantity: +value || 1,
        price: priceAfterTax,
        totalPrice: totalPriceAfterTax,
        KDV: KDV,
      };
      console.log(newItem);
      if (value.length > 0) {
        setValue("");
        keyboard?.current?.setInput("");
      }

      dispatch({ type: "addItem", payload: newItem });
      return;
    }
    dispatch({ type: "deleteItem", payload: product.id });
  }
  return (
    <Card sx={cardStyles}>
      <CardMedia
        sx={{
          width: "100%",
          height: "110px",
          overflow: "hidden",
          "&:hover": { transform: "scale(1.1)" },
          transition: "all 0.4s",
        }}
        image={image}
        title="sakdj"
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1rem",
          gap: "0.8rem",
          height: "40px",
          position: "relative",
        }}
      >
        <button className="addBtn" onClick={handelClick}>
          {isInCart ? "-" : "+"}
        </button>
        <Stack>
          <Typography sx={{ color: "var(--color-grey-700)" }} variant="h6">
            {priceAfterTax} $
          </Typography>
          <Typography
            sx={{ fontSize: "1.0875rem", color: "var(--color-grey-700)" }}
            variant="subtitle1"
            component="p"
          >
            {name}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "var(--color-grey-700)" }}>
          1 {unit}
        </Typography>
      </Stack>
    </Card>
  );
}

export default Product;
