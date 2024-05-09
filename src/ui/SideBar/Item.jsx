import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

function Item({ children, to, className }) {
  return (
    <Box>
      <NavLink
        className={`item ${className === "account" ? "account" : ""}`}
        to={to}
      >
        {children}
      </NavLink>
    </Box>
  );
}

export default Item;
