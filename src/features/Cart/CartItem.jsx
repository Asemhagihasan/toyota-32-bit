import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuantityControl from "./QuantityControl";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();
  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "5.5rem",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ fontWeight: "600" }}
            >
              {item.name}
            </Typography>
            <Typography variant="subtitle2" component="p" color="gray">
              #{item.productCode}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ fontSize: "12px", fontWeight: "bold", color: "#d1d1d1" }}
            >
              KDV %{item.KDV * 100}
            </Typography>
          </Box>
          <QuantityControl
            quantity={item.quantity}
            productId={item.productId}
          />
          <Box>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: "500", fontSize: "1.2rem", color: "gray" }}
            >
              $ {item.totalPrice}
            </Typography>
          </Box>
          <IconButton
            sx={{
              width: "2rem",
              height: "2rem",
              color: "gray",
              fontWeight: "400",
            }}
            onClick={() => {
              dispatch({ type: "deleteItem", payload: item.productId });
            }}
          >
            <CloseIcon />
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
}

export default CartItem;
