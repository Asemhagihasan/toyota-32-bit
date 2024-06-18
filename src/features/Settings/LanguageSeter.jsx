import { Divider, Stack, Typography } from "@mui/material";
import LanguageSelector from "../../translation/LanguageSelector";
import { useTranslation } from "react-i18next";

function LanguageSeter() {
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
          {translate("settingsPage.language")}
        </Typography>
        <LanguageSelector sx={{ display: "block" }} />
      </Stack>
      <Divider />
    </>
  );
}

export default LanguageSeter;
