import { Box, Container } from "@mui/material";
import DarkMod from "../../features/Settings/DarkMod";
import LanguageSeter from "../../features/Settings/LanguageSeter";
import PrinterTest from "../../features/Settings/PrinterTest";

function SettingsPage() {
  return (
    <>
      <Container
        sx={{
          maxWidth: "700px !important",
          minWidth: "350px",
          backgroundColor: "var(--color-grey-0)",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginTop: "3rem",
          marginLeft: { lg: "3rem", md: "3rem", s: "0", xs: "0" },
          boxSizing: "border-box",
          overflowX: "hidden !important",
        }}
      >
        <Box>
          <DarkMod />
          <LanguageSeter />
          <PrinterTest />
        </Box>
      </Container>
    </>
  );
}

export default SettingsPage;
