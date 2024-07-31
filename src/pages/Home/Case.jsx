import { Box, Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Case() {
  const { t: translate } = useTranslation();
  const { user } = useAuth();
  const data = useLoaderData();
  const { storeNo, CaseNo, storIp, version } = user.isAuthenticated ? data : {};
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 200,
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
          {translate("homePage.storeNo")} :{storeNo}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.caseNo")} :{CaseNo}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.storeIp")}:{storIp}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {translate("homePage.version")} :{version}
        </Typography>
      </Box>
    </Card>
  );
}

export default Case;
