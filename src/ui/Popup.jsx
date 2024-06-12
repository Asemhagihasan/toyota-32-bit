import { Box, Stack } from "@mui/material";

function Popup({ children }) {
  return (
    <Stack className="modal">
      <Stack
        className="overlay"
        sx={{ background: "rgba(211, 211, 211, 0.8)" }}
      ></Stack>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          height: "82vh",
          transform: "translate(-50%, -35%)",
          lineHeight: "1.4",
          backgroundColor: "#fff",
          padding: "16px 24px",
          borderRadius: "12px",
          maxWidth: "600px",
          boxSizing: "border-box",
          overflow: "auto",
          zIndex: 103,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}

export default Popup;
