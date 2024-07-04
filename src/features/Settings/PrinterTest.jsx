import { Button, Stack, Typography } from "@mui/material";
import TestBill from "./TestBill";
import { usePrintBill } from "../../hooks/usePrintBill";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

function PrinterTest() {
  const { user } = useAuth();
  const { pdfRef, printBill } = usePrintBill();
  const { t: translate } = useTranslation();
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "1.3rem 0", color: "var(--color-grey-700)" }}
      >
        <Typography variant="subtitle2" sx={{ fontSize: "18px" }}>
          {translate("settingsPage.printerTest")}
        </Typography>
        <Button
          sx={{
            backgroundColor: "var(--color-brand-600)",
            borderRadius: "20px",
            color: "var(--color-brand-50)",
            "&:hover": { backgroundColor: "var(--color-brand-700)" },
          }}
          variant="contained"
          disableElevation
          onClick={printBill}
          disabled={!user.isAuthenticated}
        >
          {translate("settingsPage.printerTest")}
        </Button>
        <div style={{ display: "none" }}>
          <TestBill pdfRef={pdfRef} />
        </div>
      </Stack>
    </>
  );
}

export default PrinterTest;
