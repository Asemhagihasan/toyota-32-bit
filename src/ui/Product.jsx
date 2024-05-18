import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useProductPanel } from "../context/ProductControlPanelContext";

function Product({ product }) {
  const { dispatch, cart } = useCart();
  const { value, setValue } = useProductPanel();
  const { id, productCode, name, price, image, unit, KDV } = product;
  const currentQuantity =
    cart.find((item) => item.productId === product.id)?.quantity ?? 0;
  const isInCart = currentQuantity > 0;
  function handelClick() {
    const check = cart.find((item) => item.productId === product.id);
    if (!check) {
      const newItem = {
        productId: id,
        productCode: productCode,
        name: name,
        quantity: +value || 1,
        price: price,
        totalPrice: parseFloat((price * (+value || 1)).toFixed(2)),
        KDV: KDV,
      };
      value.length > 0 && setValue("");
      dispatch({ type: "addItem", payload: newItem });
      return;
    }
    dispatch({ type: "deleteItem", payload: product.id });
  }

  return (
    <Card
      sx={{
        width: { xs: "115px", sm: "125px", md: "145px" },
        height: "230px",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.075)",
        transition: "all 200ms",
      }}
    >
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
          <Typography variant="h6">{price} $</Typography>
          <Typography
            sx={{ fontSize: "1.0875rem" }}
            variant="subtitle1"
            component="p"
          >
            {name}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          1 {unit}
        </Typography>
      </Stack>
    </Card>
  );
}

export default Product;
