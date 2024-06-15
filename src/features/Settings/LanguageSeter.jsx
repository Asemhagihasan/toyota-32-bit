import { Divider, Stack, Typography } from "@mui/material";
import LanguageSelector from "../../translation/LanguageSelector";

function LanguageSeter() {
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
        <LanguageSelector sx={{ display: "block" }} />
      </Stack>
      <Divider />
    </>
  );
}

export default LanguageSeter;
