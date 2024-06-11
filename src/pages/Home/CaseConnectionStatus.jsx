import React from "react";
import { Stack, Typography } from "@mui/material";
import { useConnection } from "../../context/ConnectionStatus";
function CaseConnectionStatus() {
  const { isOnline } = useConnection();
  return (
    <Stack pl={1} direction="row" gap="6px" alignItems="center">
      <Typography variant="subtitle2">
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

export default CaseConnectionStatus;
