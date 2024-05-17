import { Box, Stack } from "@mui/material";
import LocationSetter from "../../features/sales/LocationSetter";
import { Outlet } from "react-router-dom";
import Cart from "../../features/Cart/Cart";
import ProductControlPanel from "../../features/sales/ProductControlPanel";

function SalesPage() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          padding: "1rem 1rem ",
        }}
      >
        <Stack
          spacing={1}
          sx={{
            paddingTop: "1.2rem",
            width: "100%",
            // marginLeft: { xs: "2.5rem", lg: "0" },
          }}
        >
          <LocationSetter />
          <Stack
            direction="row-reverse"
            flexWrap="wrap"
            justifyContent="start"
            gap={2}
          >
            <ProductControlPanel />
            <Outlet />
          </Stack>
        </Stack>
      </Box>
      <Cart />
    </>
  );
}

export default SalesPage;
