import { Box, Stack, Typography } from "@mui/material";
import LocationSetter from "../../features/sales/LocationSetter";
import { Outlet } from "react-router-dom";
import ProductControlPanel from "../../features/sales/ProductControlPanel";
import Cart from "../../features/Cart/Cart";
import Footer from "./Footer";
import { useState } from "react";
import PaymentPanel from "../../features/sales/PaymentPanel";
import LinkButton from "../../ui/LinkButton";
import { useTranslation } from "react-i18next";
function SalesPage() {
  const [makePayment, setMakePayment] = useState(false);
  const { t: translate } = useTranslation();
  const styledBaseOnState = {
    display: "flex",
    flexDirection: "column",
    gap: "300px",
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          padding: "1rem 1rem 0 1rem",
          ...(makePayment && styledBaseOnState),
        }}
      >
        <Stack
          spacing={1}
          sx={{
            paddingTop: "1.2rem",
            width: "100%",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", color: "var(--color-grey-700)" }}
          >
            {translate("salePage.storeAvailability")}
          </Typography>
          {makePayment ? (
            <>
              <PaymentPanel setMakePayment={setMakePayment} />
              <LinkButton to="-1" onClick={() => setMakePayment(false)}>
                &larr; {translate("salePage.goBack")}
              </LinkButton>
            </>
          ) : (
            <>
              <LocationSetter />
              <Stack
                direction="row-reverse"
                flexWrap="wrap"
                justifyContent="start"
                gap={2}
                sx={{ mt: "1.2rem !important" }}
              >
                <ProductControlPanel />
                <Outlet />
              </Stack>
            </>
          )}
        </Stack>
        <Footer />
      </Box>
      <Cart setMakePayment={setMakePayment} />
    </>
  );
}

export default SalesPage;
