import { Box } from "@mui/material";
import Case from "./Case";
import CaseConnectionStatus from "./CaseConnectionStatus";

function Home() {
  return (
    <Box
      sx={{
        width: "30%",
        height: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Case />
      <CaseConnectionStatus sx={{ mb: "1rem" }} />
    </Box>
  );
}

export default Home;
