import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function EmptyCart() {
  const { t: translate } = useTranslation();
  return (
    <Stack>
      <Typography
        sx={{ textAlign: "center", mt: "2rem", color: "var(--color-grey-700)" }}
        variant="h6"
      >
        {translate("salePage.emptyCart")}
      </Typography>
    </Stack>
  );
}
export default EmptyCart;
