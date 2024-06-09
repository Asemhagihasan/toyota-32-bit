import React from "react";
import { Stack, Typography } from "@mui/material";
import { useConnection } from "../../context/ConnectionStatus";
function Home() {
  const { isOnline } = useConnection();
  return (
    <Stack pl={1} direction="row" gap="6px" alignItems="center" mb={1}>
      <Typography variant="body2" mb="2px">
        Store is {isOnline ? "online" : "offline"}
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

export default Home;
