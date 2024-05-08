import { Card, CardMedia, Fab, Stack, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";

function Product({ product }) {
  const { dispatch } = useCart();
  function handelAdd() {
    dispatch({ type: "addItem", payload: product });
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
        image={product.image}
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
        <button onClick={() => handelAdd()} className="addBtn">
          +
        </button>
        <Stack>
          <Typography variant="h6">{product.sale_price} $</Typography>
          <Typography
            sx={{ fontSize: "1.0875rem" }}
            variant="subtitle1"
            component="p"
          >
            {product.name}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          1 {product.unit}
        </Typography>
      </Stack>
    </Card>
  );
}

export default Product;
