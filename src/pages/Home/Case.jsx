import { Box, Card, Typography } from "@mui/material";

function Case() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 300,
        borderRadius: "1rem",
        backgroundColor: "#f5f7f8",
        mt: "8px",
      }}
    >
      <Box p={2}>
        <Typography variant="body2" gutterBottom>
          store No :1057
        </Typography>
        <Typography variant="body2" gutterBottom>
          Case No :1
        </Typography>
        <Typography variant="body2" gutterBottom>
          store Ip No :10.0.2.16
        </Typography>
        <Typography variant="body2" gutterBottom>
          Version :v1.3.78.146
        </Typography>
      </Box>
    </Card>
  );
}

export default Case;
