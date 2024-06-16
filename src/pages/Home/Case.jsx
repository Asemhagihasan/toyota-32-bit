import { Box, Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Case() {
  const { t: translate } = useTranslation();
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 300,
        borderRadius: "1rem",
        backgroundColor: "var(--color-grey-0)",
        color: "var(--color-grey-700)",
        mt: "1rem",
        ml: "1rem",
      }}
    >
      <Box p={2}>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.storeNo")} :1057
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.caseNo")} :1
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.storeIp")}:10.0.2.16
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.version")} :v1.3.78.146
        </Typography>
      </Box>
    </Card>
  );
}

export default Case;
