import { Button, Stack, Typography } from "@mui/material";

function PrinterTest() {
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "1.3rem 0", color: "var(--color-grey-700)" }}
      >
        <Typography variant="subtitle2" sx={{ fontSize: "18px" }}>
          Language
        </Typography>
        <Button
          sx={{
            backgroundColor: "var(--color-brand-600)",
            borderRadius: "20px",
            color: "var(--color-grey-50)",
            "&:hover": { backgroundColor: "var(--color-brand-700)" },
          }}
          variant="contained"
          disableElevation
        >
          Printer Test
        </Button>
      </Stack>
    </>
  );
}

export default PrinterTest;
