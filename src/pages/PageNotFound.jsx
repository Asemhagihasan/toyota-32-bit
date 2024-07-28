import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LinkButton from "../ui/LinkButton";
import { useTranslation } from "react-i18next";

export const metadata = { title: `Not found | Errors |` };

export default function NotFound() {
  const { t: translate } = useTranslation();
  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        mt: "2rem",
        overflowY: "auto",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          maxWidth: "md",
          color: "var(--color-grey-700)",
        }}
      >
        <Box>
          <Box
            component="img"
            alt="Under development"
            src="/error-404.png"
            sx={{
              display: "inline-block",
              height: "auto",
              maxWidth: "100%",
              width: "400px",
            }}
          />
        </Box>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {translate("pageNotFound.pageNotFound")}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {translate("pageNotFound.navigationMessage")}
        </Typography>
        <LinkButton to="-1"> &larr;{translate("auth.goBack")}</LinkButton>
      </Stack>
    </Box>
  );
}
