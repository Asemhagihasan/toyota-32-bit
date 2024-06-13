import { Stack } from "@mui/material";

function SalesContent({ children }) {
  return (
    <Stack
      maxWidth={630}
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {children}
    </Stack>
  );
}

export default SalesContent;
