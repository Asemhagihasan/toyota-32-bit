import { Box, Stack, Typography } from "@mui/material";
import BillItemContent from "./BillItemContent";

function BillItem({ item }) {
  return (
    <Box>
      <BillItemContent item={{ name: item.name, total: item.totalPrice }} />
      <Stack flexDirection="column">
        <Typography variant="subtitle2" sx={{ color: "#e28743" }}>
          ${item.totalPrice}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#e28743" }}>
          {item.quantity} x ${item.price}
        </Typography>
      </Stack>
    </Box>
  );
}

export default BillItem;
