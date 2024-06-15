import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuantityControl from "./QuantityControl";
import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();
  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          height: "5.5rem",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "var(--color-grey-0)",
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
              sx={{ fontWeight: "600", color: "var(--color-grey-700)" }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{ color: "var(--color-grey-700)" }}
            >
              #{item.productCode}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "var(--color-grey-500)",
              }}
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
              sx={{
                fontWeight: "500",
                fontSize: "1.2rem",
                color: "var(--color-grey-700)",
              }}
            >
              $ {item.totalPrice}
            </Typography>
          </Box>
          <IconButton
            sx={{
              width: "2rem",
              height: "2rem",
              color: "var(--color-grey-700)",
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
    </Box>
  );
}

export default CartItem;
