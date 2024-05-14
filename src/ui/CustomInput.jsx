import Input from "@mui/joy/Input";

function CustomInput({ text, sx, ...props }) {
  return (
    <Input
      placeholder={text}
      color="secondary"
      variant="solid"
      required
      sx={{
        height: "3rem",
        // "&:hover": {
        //   border: "2px solid #333",
        // },
        boxShadow: "0 1px 2px rgba(0,0,0,.12)",
        minWidth: "375px",
        maxWidth: "612px",
        ...sx,
      }}
      {...props}
    />
  );
}

export default CustomInput;
