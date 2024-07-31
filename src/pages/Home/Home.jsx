import { Box } from "@mui/material";
import Case from "./Case";
import CaseConnectionStatus from "./CaseConnectionStatus";
import { GetStoreInformation } from "../../services/storeApi";

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
export async function loader() {
  const data = await GetStoreInformation();
  return data.data;
}

export default Home;
