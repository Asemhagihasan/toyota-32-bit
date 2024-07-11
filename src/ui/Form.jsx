import { Box } from "@mui/material";

function Form({ children, onSubmit }) {
  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      sx={{
        backgroundColor: "var(--color-grey-0)",
        borderRadius: "16px",
        boxShadow: "0 3px 5px rgba(0,0,0,.15)",
        padding: "2.8rem 2rem",
        width: "550px",
        minWidth: "375px",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

export default Form;
