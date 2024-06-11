import { Stack, Typography } from "@mui/material";

function BillItemContent({ item }) {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
        {item.name}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
        ${item.total}
      </Typography>
    </Stack>
  );
}

export default BillItemContent;
