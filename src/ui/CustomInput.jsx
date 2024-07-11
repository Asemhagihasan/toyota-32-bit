import Input from "@mui/joy/Input";

function CustomInput({ text, sx, ...props }) {
  return (
    <Input
      placeholder={text}
      color="secondary"
      variant="solid"
      sx={{
        backgroundColor: "var(--color-grey-0)",
        color: "var(--color-grey-700)",
        height: "3rem",
        boxShadow: "0 1px 2px rgba(0,0,0,.12)",
        minWidth: "275px",
        maxWidth: "612px",
        "--Input-focusedHighlight":
          "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, var(--color-brand-600)))) !important",
        ...sx,
      }}
      {...props}
    />
  );
}

export default CustomInput;
