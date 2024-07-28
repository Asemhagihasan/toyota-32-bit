import { Stack } from "@mui/material";

function Select() {
  return (
    <Stack
      component="select"
      sx={{
        fontSize: "1.4rem",
        p: "0.6rem 0.8rem",
        borer: "1px solid var(--color-grey-0)",
        borderRadius: "7px",
        backgroundColor: "var(--color-grey-0)",
        fontWeight: "500",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
      }}
    >
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
      <option>A-B</option>
    </Stack>
  );
}

export default Select;
// font-size: 1.4rem;
// padding: 0.8rem 1.2rem;
// border: 1px solid
//   ${(props) =>
//     props.type === "white"
//       ? "var(--color-grey-100)"
//       : "var(--color-grey-300)"};
// border-radius: var(--border-radius-sm);
// background-color: var(--color-grey-0);
// font-weight: 500;
// box-shadow: var(--shadow-sm);
