import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Trigger({ to, style, isActive, children, disable, type, props }) {
  if (to) {
    return (
      <>
        <Link
          style={style || ""}
          className={`linkBtn ${isActive ? "activeLink" : ""}`}
          to={to}
          disable={disable}
        >
          {children}
        </Link>
      </>
    );
  }
  return (
    <Button {...props} sx={style} variant={type} disableElevation>
      {children}
    </Button>
  );
}

export default Trigger;
