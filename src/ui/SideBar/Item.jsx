import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

function Item({ children, to, className, setSideBarIsOpen }) {
  return (
    <Box>
      <NavLink
        className={`item ${className === "account" ? "account" : ""}`}
        to={to}
        onClick={() => setSideBarIsOpen(false)}
      >
        {children}
      </NavLink>
    </Box>
  );
}

export default Item;
