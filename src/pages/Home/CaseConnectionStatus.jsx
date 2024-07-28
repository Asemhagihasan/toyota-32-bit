import React from "react";
import { Stack, Typography } from "@mui/material";
import { useConnection } from "../../context/ConnectionStatus";
import { useTranslation } from "react-i18next";
function CaseConnectionStatus({ sx }) {
  const { isOnline } = useConnection();
  const { t: translate } = useTranslation();
  return (
    <Stack
      sx={{ color: "var(--color-grey-700)", ml: "1rem", ...sx }}
      pl={1}
      direction="row"
      gap="6px"
      alignItems="center"
    >
      <Typography variant="subtitle2">
        {translate("homePage.storeIs")}{" "}
        {isOnline
          ? `${translate("homePage.onlineState")}`
          : `${translate("homePage.offlineState")}`}
      </Typography>
      <Stack
        sx={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: `${isOnline ? "green" : "red"}`,
        }}
      />
    </Stack>
  );
}

export default CaseConnectionStatus;
